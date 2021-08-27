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
    this.id = this._ar.snapshot.paramMap.get('id');
    this._ps.getProductById(this.id).subscribe(res => {
      this.product = res;
    }, (error) => {console.log(error); })
    
  }

  goBack() {
    this._router.navigate(['/admin-dashboard/products']);
  }

  updateProduct(){
    this._ps.updateProduct(this.product).subscribe(res => {
      alert('Product Updated Success!!')
      this._router.navigate(['/admin-dashboard/products']);
    }, (error) => {console.log(error); })
  }

}
