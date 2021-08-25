import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  public totalItem: number = 0;

  constructor( private _productService: ProductService, private _cartService: CartService ) { }

  ngOnInit(): void {

    this._cartService.getProducts()
    .subscribe(res => {
      this.totalItem = res.length;
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

  addtoCart(product: any) {
    this._cartService.addtoCart(product);
    alert('added to cart')
  }

}
