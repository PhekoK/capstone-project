import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  public totalItem: number = 0

  public products : any = [];
  public grandTotal !: number;

  constructor( private _auth: AuthService , 
          private _cartService: CartService , private _router: Router ) { }

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
  }

  shopMore() {
    alert('Thank you for buying. Your order is out for delivery')
    this._router.navigate(['/product']);
  }

}
