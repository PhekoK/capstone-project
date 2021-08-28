import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  providers: [ProductService]
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

    this._cs.getWishlist().subscribe(data => {
      this.products = data;
    })
  }

  removeFromWishList(item: any){
    this._cs.removeFromwishList(item);
  }

  removeAll(){
    
  }
}
