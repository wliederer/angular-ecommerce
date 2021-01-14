import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {

  @Input()
  cart!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
