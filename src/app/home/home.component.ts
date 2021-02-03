import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ShoppingCart } from '../shoppingCart';
import { UserDataService } from '../userDataService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [
    {name:'skatewrench', price: 1.99, qty:1},
    {name:'shirt', price: 19.99, qty:1}
  ];

  @Input()
  cart!:ShoppingCart;

  constructor(private userData: UserDataService) { }

  ngOnInit(): void {

    const tempCart = this.userData.getCart();
    this.shoppingCart.cart = tempCart.cart;
    this.shoppingCart.count = tempCart.count;
  }

  addProductToCart(product:Product){
    const productExistInCart = this.shoppingCart.cart.find(({name})=>name===product.name);
    if(!productExistInCart){
      this.shoppingCart.cart.push(product);
    } else {
      productExistInCart.qty++;
    }
    let runningCount = 0;
    this.shoppingCart.cart.forEach(x=>{runningCount= runningCount+ x.qty})
    this.shoppingCart.count = runningCount;
    // this.shoppingCart.isEmpty = false;
    this.userData.emitData(this.shoppingCart);
  }

  shoppingCart: ShoppingCart = { cart:[], count:0, isEmpty:false};

}
