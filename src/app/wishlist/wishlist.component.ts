import { Component, OnInit } from '@angular/core';
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

  constructor( private _proService: CartService ) { }

  ngOnInit(): void {

    this._proService.getProducts().subscribe(result => {
      this.totalItem = result.length;
    })
  }

}
