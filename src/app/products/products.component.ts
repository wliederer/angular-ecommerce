import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  @Input() 
  product:any;
  @Output()
  productAdded = new EventEmitter();

  addProductToCart(){
    this.productAdded.emit();
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
