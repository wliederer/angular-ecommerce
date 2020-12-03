import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  products: any[]=[];
  @Output()
  productAdded = new EventEmitter();
  addProductToCart(){
    this.productAdded.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
