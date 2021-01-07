import { Component } from '@angular/core';
import { Product } from './product';
import { ShoppingCart } from './shoppingCart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ecommerce';
  productList = [
    {name:'skatewrench', price: 1.99, qty:1},
    {name:'shirt', price: 19.99, qty:1}
  ];


  
  addProductToCart(product:Product){
    const productExistInCart = this.cartProductList.find(({name})=>name===product.name);
    if(!productExistInCart){
      this.cartProductList.push(product);
    } else {
      productExistInCart.qty++;
    }
    let runningCount = 0;
    this.cartProductList.forEach(x=>{runningCount= runningCount+ x.qty})
    this.shoppingCart.count = runningCount;
  }

  cartProductList: any[]=[];
  shoppingCart: ShoppingCart = { cart:this.cartProductList, count:0};
}
