import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  @Input()
  product: any;
  @Output()
  productAdded = new EventEmitter();

  addProductToCart(product:Product){
    this.productAdded.emit(product);
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
