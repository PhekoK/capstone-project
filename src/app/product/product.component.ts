import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  loggedIn: boolean = false;

  products: Product[] = [];
  public totalItem: number = 0
  public wishlist: number = 0;

  constructor( private _productService: ProductService, private _cartService: CartService,
      private _auth: AuthService, private _router: Router ) { }

  ngOnInit(): void {

    if(this._auth.isLoggedIn()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    this._cartService.getProducts()
    .subscribe(res => {
      this.totalItem = res.length;
    })


    this._cartService.getWishlist()
    .subscribe(res => {
      this.wishlist = res.length;
    })

    this._productService.getProducts().subscribe(result => {
      this.products = result;
      //this.totalItem = result.length;

      this.products.forEach((a:any) => {
        Object.assign(a, {quantity:1, total:a.price});
      })
    }, (error) => {
      console.log(error);
    })
  }

  addtoWishlist(item: any){
    this._cartService.addTowishlist(item);
    alert('wishlisted');
  }

  goToWishList() {
    this._router.navigate(['/wishlist'])
  }

  addtoCart(product: any) {
    this._cartService.addtoCart(product);
    alert('added to cart')
  }

  //LOGOUT -AUTH
  logout(){
    this._auth.logout();
  }

}
