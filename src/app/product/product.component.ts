import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor( private _productService: ProductService ) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(result => {
      this.products = result;
    }, (error) => {
      console.log(error);
    })
  }

}
