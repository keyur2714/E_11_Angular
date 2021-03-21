import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../order-item.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  cartItems : OrderItem[] = [];
  totalItems : number = 0;
  totalBillAmount : number = 0;
  date : Date = new Date();

  constructor(private location : Location) { }

  ngOnInit() {
    this.cartItems = JSON.parse(sessionStorage.getItem("orderItems"));
    this.totalItems = this.cartItems.length;
    for(let i=0;i<this.cartItems.length;i++){
      this.totalBillAmount = this.totalBillAmount + (this.cartItems[i].qty * this.cartItems[i].item.price); 
    }
  }

  back() : void {
    this.location.back();
  }

}
