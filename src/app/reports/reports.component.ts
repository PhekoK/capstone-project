import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ProductService]
})
export class ReportsComponent implements OnInit {

  items: Product[] = [];

  product: Product = new Product();

  constructor( private _productService: ProductService ) { }

  ngOnInit(): void {

    this._productService.getProducts().subscribe(res => {
      this.items = res
    }, (err) => { console.log(err); })
  }

}
