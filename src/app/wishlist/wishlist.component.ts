import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor( private _proService: CartService ) { }

  ngOnInit(): void {
  }

  removeFromWishList(item: any){
    this._proService.removeCartItem(item);
  }

  removeWishListedItems(){
    this._proService.removeAllCart();
  }

}
