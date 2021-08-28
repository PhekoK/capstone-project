import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;
  product: Product = new Product();

  products: Product[] = [];
  public totalItem: number = 0
  public wishlist: number = 0;
  

  constructor( private _route: ActivatedRoute,
          private _ps: ProductService,
          private _router: Router,
          private _cs: CartService,
          private _auth: AuthService ) { }

  ngOnInit(): void {

    this._cs.getProducts()
    .subscribe(res => {
      this.totalItem = res.length;
    });

    this.id = this._route.snapshot.paramMap.get('id');
    this._ps.getProductById(this.id).subscribe(res => {
      this.product = res;
    }, (err) => { console.log(err) ; })

    this._ps.getProducts().subscribe(result => {
      this.products = result;
      //this.totalItem = result.length;

      //add price to cart ...???
    }, (error) => {
      console.log(error);
    })
    
  }

  addtoCart(product: any) {
    this._cs.addtoCart(product);
    alert('added to cart')
  }

  goBack(){
    this._router.navigate(['/product']);
  }

  logout(){
    this._auth.logout();
  }

}
