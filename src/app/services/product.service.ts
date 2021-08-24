import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private _http: HttpClient ) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>("http://localhost:3000/products")
    .pipe(map((res: any) => {
      return res;
    }))
  }

  getProductById(id:any): Observable<Product> {
    return this._http.get<Product>(`http://localhost:3000/products/${id}`)
}
}
