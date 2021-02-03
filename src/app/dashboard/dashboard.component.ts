import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCart } from '../shoppingCart';
import { UserDataService } from '../userDataService';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cart:ShoppingCart= {cart:[], count:0, isEmpty:false};
  showCart=true;
  
  constructor(private userData: UserDataService) { }
  
  ngOnInit() {
    this.userData.subscriber$.subscribe(data => {
    this.cart.count = data.count;
      // if(this.cart.count>0){
      //   this.showCart=true;
      // }else{
      //   this.showCart=false;
      // }
  })
  }
}
