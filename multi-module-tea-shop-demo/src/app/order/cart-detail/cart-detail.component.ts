import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../order-item.model';
import { Location } from '@angular/common';
import { Order } from '../order.model';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

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

  constructor(private location : Location,private orderService:OrderService,private router:Router) { }

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

  saveOrder() : void {
    let order:Order = new Order();
    let newOrderId = 0;
    this.orderService.getLastOrderId().subscribe(
      (data)=>{
        newOrderId = data + 1;
        order.id = newOrderId;
        order.orderDate = this.date;
        order.totalBillAmount = this.totalBillAmount;
        order.totalItems = this.totalItems;
        order.orderItems = this.cartItems;
        this.orderService.placeOrder(order).subscribe(
          (data)=>{
            alert("Your Order Placed susseccfully, Order Id: "+data.id);
            sessionStorage.removeItem("orderItems");
            this.totalBillAmount = 0;
            this.totalItems = 0;
            this.router.navigate(['/allitems']);
          }
        )
      }
    );
    
  }

}
