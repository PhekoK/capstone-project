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

  deleteProduct(id:any) {
    this._productService.deleteProduct(id).subscribe(data => {
      console.log('Product Deleted Success!!');
      alert("Product Removed from DB");
      console.log(data);
      
    }, (err) => {
      console.log(err);
    })
  }

}
