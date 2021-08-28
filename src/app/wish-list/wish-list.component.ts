import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  public totalItem: number = 0
  public wishlist: number = 0;

  constructor(  private _cs: CartService ) { }

  ngOnInit(): void {
    this._cs.getWishlist().subscribe(data => {
      this.wishlist = data.length;
    })
  }

}
