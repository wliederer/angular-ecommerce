import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../shoppingCart';
import { Product } from '../product';
import { UserDataService } from '../userDataService';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart:ShoppingCart = {cart:[], count:0};
  showCart!:boolean;

  constructor(private userData: UserDataService) {
   }

  //  removeProduct(product:Product){
  //    this.cart.cart.forEach((x:Product,i:number)=>{
  //      if(product.name === x.name){
  //        x.qty--;
  //        this.userData.emitData(this.cart);
  //      }
  //    })
  //  }

   isCartEmpty(){
     console.log("called isCartEmpty")
     if(this.cart.count>0){
       this.showCart=true;
     }else
     this.showCart=false;
   }
  
  ngOnInit(){
    console.log("ngoninit called")
    if(this.cart.count===0){
      console.log("cart was empty checking userData service");
      const tempCart = this.userData.getCart();
      console.log(tempCart);
      this.cart.cart = tempCart.cart;
      this.cart.count = tempCart.count;
      this.isCartEmpty();
    } else {
     this.userData.subscriber$.subscribe((data:any) => {
      this.cart.cart = data.cart;
      this.cart.count = data.count;
      this.isCartEmpty();
    })
  }
  }

}
