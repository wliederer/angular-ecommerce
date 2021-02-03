import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../shoppingCart';
import { Product } from '../product';
import { UserDataService } from '../userDataService';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart:ShoppingCart = {cart:[], count:0, isEmpty:true};

  constructor(private userData: UserDataService) {
   }

   removeProduct(product:Product){
     this.cart.cart.forEach((x:Product,i:number)=>{
       if(product.name === x.name && x.qty>0){
         x.qty--;
         this.cart.count--;
         this.userData.emitData(this.cart);
       }
     })
   }

   isCartEmpty(){
     if(this.cart.count<1){
        console.log("nothing");
     } else
     this.cart.isEmpty=false;
   }
  
  ngOnInit(){
   
      const tempCart = this.userData.getCart();
      this.cart.cart = tempCart.cart;
      this.cart.count = tempCart.count;
      this.isCartEmpty();
    } 
  
  

}
