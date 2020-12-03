import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ecommerce';
  productList = [
    {name:'skatewrench', price: 1.99},
    {name:'shirt', price: 19.99}
  ];

  
  addProductToCart(){
  //   const productExiistInCart = this.cartProductList.find(({name})=>name===product.name);
  //   if(!productExiistInCart){
  //     // this.cartProductList.push({...product, num:1});
  //     console.log(this.cartProductList);
  //     return;
  //   }
    console.log("nothin")
  //   // productExiistInCart.num+=1;
  }

  cartProductList=[];
}
