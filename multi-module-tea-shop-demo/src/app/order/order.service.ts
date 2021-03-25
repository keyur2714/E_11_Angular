import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  appUrl : string = 'http://localhost:3000/orders';

  constructor(private httpClient : HttpClient) { }

  placeOrder(order : Order) : Observable<Order> {
    return this.httpClient.post<Order>(this.appUrl,order);
  }

  getAllOrders() : Observable<Order[]>{
    return this.httpClient.get<Order[]>(this.appUrl);
  }

  getLastOrderId() : Observable<number>{
    return this.getAllOrders().pipe(map(orders=>orders.length));
  }

}
