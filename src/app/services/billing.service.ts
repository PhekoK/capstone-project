import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  public billingDetails = new BehaviorSubject<any>([]);
  public billInfo : any = [];

  constructor() { }

  getDetails() {
    return this.billingDetails.asObservable();
  }

  setDetails(inf: any){
    this.billInfo.push(...inf);
    this.billingDetails.next(this.billInfo);
    console.log(this.billInfo);
  }
}
