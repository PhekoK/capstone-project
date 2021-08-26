import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;
  product: Product = new Product();

  constructor( private _route: ActivatedRoute,
          private _ps: ProductService,
          private _router: Router ) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');
    this._ps.getProductById(this.id).subscribe(res => {
      this.product = res;
    }, (err) => { console.log(err) ; })
    
  }

  goBack(){
    this._router.navigate(['/product']);
  }

}
