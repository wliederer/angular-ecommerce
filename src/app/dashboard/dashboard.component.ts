import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCart } from '../shoppingCart';
import { UserDataService } from '../userDataService';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input()
  cart!: any;
  showCart=false;

  constructor(private userData: UserDataService) { }
  
  ngOnInit() {
    this.userData.subscriber$.subscribe(data => {
      this.cart = data;
      if(this.cart.count>0){
        this.showCart=true;
      }else{
        this.showCart=false;
      }
  })
  }
}
