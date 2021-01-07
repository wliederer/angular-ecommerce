import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ShoppingCart } from '../shoppingCart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  products!: any[];
  @Input()
  cart!:ShoppingCart;

  @Output()
  productAdded = new EventEmitter();
  addProductToCart(product:Product){
    this.productAdded.emit(product);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
