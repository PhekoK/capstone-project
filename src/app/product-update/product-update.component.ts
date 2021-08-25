import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
  providers: [ProductService]
})
export class ProductUpdateComponent implements OnInit {

  id: any;

  product: Product = new Product();
  //product: any;

  constructor(private _activeRoute: ActivatedRoute, 
       private router: Router ,
       private _prodServe: ProductService ) { }

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.paramMap.get('id');
    this._prodServe.getProductById(this.id).subscribe(res => {
      this.product = res;
    }, (error) => { console.log(error); })
  }

  updateItem(){
  }

  goBack(){

  }

}
