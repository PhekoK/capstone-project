import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _id: string;

  public wishList : any =[];
  public productList = new BehaviorSubject<any>([]);

  constructor( private _http: HttpClient ) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>("http://localhost:3000/products");
  }

  getProductById(id: any): Observable<Product> {
    return this._http.get<Product>('http://localhost:3000/products/' + id)
  }

  addNewProduct(product: Product): Observable<Product> {
    return this._http.post<Product>("http://localhost:3000/products", product);
  }

  updateProduct(product: Product) : Observable<Product> {
    return this._http.patch<Product>("http://localhost:3000/products/" + product._id, product);
  }

  deleteProduct(id: any): Observable<Product> {
    return this._http.delete<Product>(`http://localhost:3000/products/${id}`);
  }

}
