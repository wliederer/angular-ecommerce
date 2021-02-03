import { Injectable} from '@angular/core';  
import { ShoppingCart } from './shoppingCart';
import { Subject } from 'rxjs';

@Injectable()
export class UserDataService { 
  
  cart:ShoppingCart={cart:[],count:0,isEmpty:true};
  
  
  observer = new Subject<ShoppingCart>();
  public subscriber$ = this.observer.asObservable();

  emitData(data:ShoppingCart) {
    this.observer.next(data);
    this.cart.cart = data.cart;
    this.cart.count = data.count;
  }

  getCart(){
  
    return this.cart;
  }

}