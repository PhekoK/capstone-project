import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items: Product[] = [];

  product: Product = new Product();

  id: any;

  constructor( private _productService: ProductService ) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(res => {
      this.items = res;
    }, (err) => { console.log(err); })
  }

}
