import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {


  items: Product[] = [];

  constructor( private _productService: ProductService ) { }

  ngOnInit(): void {

    this._productService.getProducts().subscribe(res => {
      this.items = res
    }, (err) => { console.log(err); })
  }

}
