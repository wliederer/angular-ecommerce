import { Injectable} from '@angular/core';  
import { ShoppingCart } from './shoppingCart';
import { Subject } from 'rxjs';

@Injectable()
export class UserDataService {  
    observer = new Subject();
  public subscriber$ = this.observer.asObservable();

  emitData(data:ShoppingCart) {
    this.observer.next(data);
  }
}