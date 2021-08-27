import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers: [ProductService]
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();

  constructor( private _prodService: ProductService ,
                private _router: Router ) { }

  ngOnInit(): void {
  }

  addProduct(){
    this._prodService.addNewProduct(this.product).subscribe(res => {
      alert("Product Added Success!!");
      this._router.navigate(['/admin-dashboard/products']);
    }, (err) => {
      console.log(err);
    })
  }

}
