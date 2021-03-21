import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemApiUrl : string = 'http://localhost:3000/items';

  constructor(private httpClient : HttpClient) { }

  getItems(): Observable<Item[]>{
    //let item1= new Item(1,"TEA","Ginger Tea",12);
    //let item2= new Item(2,"COFFEE","Hot Coffee",20);
    //return of([item1,item2]);
    return this.httpClient.get<Item[]>(this.itemApiUrl);
  }

  getItemById(itemId: number) : Observable<Item> {
    return this.httpClient.get<Item>(this.itemApiUrl+"/"+itemId);
  }

  save(item : Item) : Observable<Item> { 
    return this.httpClient.post<Item>(this.itemApiUrl,item);
  }

  update(item : Item) : Observable<Item> { 
    return this.httpClient.put<Item>(this.itemApiUrl+"/"+item.id,item);
  }

  delete(itemId : number) : Observable<void> {
    return this.httpClient.delete<void>(this.itemApiUrl+"/"+itemId);
  }
}
