import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public wishItems = new BehaviorSubject<any>([]);
  public wishList : any =[];

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  getWishlist() {
    return this.wishItems.asObservable();
  }

  saveToLocalStorage() {
    localStorage.setItem('cartItemList', JSON.stringify(this.cartItemList));
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
    this.saveToLocalStorage();
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  addTowishlist(product : any){
    this.wishList.push(product);
    this.wishList.next(this.wishList);
    console.log(this.wishList);
  }

  removeFromwishList(product: any){
    this.wishList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.wishList.splice(index,1);
      }
    })
    this.productList.next(this.wishList);
  }
}
