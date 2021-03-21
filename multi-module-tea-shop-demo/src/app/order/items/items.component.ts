import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../item.model';
import { OrderItem } from '../order-item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items : Item[] = [];
  cartItems : OrderItem[] = [];

  constructor(private itemService : ItemsService) { }

  ngOnInit() {
    this.getItems();
    if(sessionStorage.getItem("orderItems")){
      this.cartItems = JSON.parse(sessionStorage.getItem("orderItems"));
      //alert(this.cartItems.length);
    }
  }

  getItems() : void {
    this.itemService.getItems().subscribe(
      (data)=>{
        this.items = data;
      }
    )
  }

  addToCart(item: Item,qty : number): void{
    let newCartItem = new OrderItem();
    newCartItem.id = this.cartItems.length + 1;
    newCartItem.item = item;
    newCartItem.qty = qty;
    this.cartItems.push(newCartItem);
    sessionStorage.setItem("orderItems",JSON.stringify(this.cartItems));
  }
}
