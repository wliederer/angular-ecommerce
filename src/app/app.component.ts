import { Component } from '@angular/core';

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
  

  cartProductList=[];
}
