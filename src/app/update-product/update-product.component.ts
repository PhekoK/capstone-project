import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
  providers: [ProductService]
})
export class UpdateProductComponent implements OnInit {

  id: any;

  product: Product = new Product();

  constructor( private _router: Router, 
           private _ps: ProductService, 
           private _ar: ActivatedRoute ) { }

  ngOnInit(): void {
    
  }

  goBack() {
    this._router.navigate(['/admin-dashboard/products']);
  }

  updateProduct(){
    this._ps.updateProduct(this.id).subscribe(res => {
      this.product = res;
      this._router.navigate(['/admin-dashboard/products']);
    })
  }

}
