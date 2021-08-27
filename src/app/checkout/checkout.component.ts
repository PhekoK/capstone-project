import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BillingService } from '../services/billing.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  strikeCheckout: any = null;
  
  //total number of items in cart
  public totalItem: number = 0

  public products : any = [];
  public info: any = [];
  public grandTotal !: number;

  constructor(private _authGuardService: AuthService,
    private _router: Router, private _cartService: CartService,
       private _bs: BillingService ) { }

  ngOnInit(): void {

    this._cartService.getProducts()
    .subscribe(res => {
      this.totalItem = res.length; 
    })

    this._cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this._cartService.getTotalPrice();
    })

    this._bs.getDetails().subscribe(result => {
      this.info = result;
    })

    if (!this._authGuardService.isLoggedIn()) {
      this._router.navigate(['/login']);
    }
    this.stripePaymentGateway();
  }

  payNow() {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51JQ8SvE6lHBPHWZ0YSO85A1T9hj1klfol8DMOu7pBGe1PgnyMgNXTKKZhOKktGbPYwf4ft57ifI4dwvWOCbQJsjY00uGwCpCVo',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });

    strikeCheckout.open({
      name: 'MakePayment',
      description: 'Payment widgets',
      amount: this.grandTotal * 100
    });
    this._router.navigate(['/invoice']);
  }

  stripePaymentGateway() {
    if (!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_12239293949ksdfksdjkfj1232q3jkjssdfjk',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }
      window.document.body.appendChild(scr);
    }
  }

}
