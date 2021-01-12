import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../shoppingCart';
import { UserDataService } from '../userDataService';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart!:any;

  constructor(private userData: UserDataService) {
   }

  

  ngOnInit(){
     this.userData.subscriber$.subscribe(data => {
       this.cart = data;
      console.log(this.cart);
    })
  }

}
