import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  strikeCheckout: any = null;

  constructor(private _authGuardService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
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
      amount: 500 * 100
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
