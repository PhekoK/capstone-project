import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  loggedIn: boolean = false;

  public totalItem: number = 0
  public wishlist: number = 0;

  constructor( private _cs: CartService, private _ps: Product,
    private _auth: AuthService ) { }

  ngOnInit(): void {
    if(this._auth.isLoggedIn()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    this._cs.getWishlist().subscribe(data => {
      this.wishlist = data.length;
    })
    
  }

}
