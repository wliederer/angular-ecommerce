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


  
  addProductToCart(product:Product){
    const productExistInCart = this.cartProductList.find(({name})=>name===product.name);
    if(!productExistInCart){
      this.cartProductList.push(product);
      return;
    }
    console.log(productExistInCart);
  }

  cartProductList: any[]=[];
}
