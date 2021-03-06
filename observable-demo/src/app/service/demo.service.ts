import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  appUrl : string = 'http://localhost:3000/items';

  constructor(private http:HttpClient) { }

  getItems() : Observable<Item[]>{
    return this.http.get<Item[]>(this.appUrl).pipe(
      map(items=>{
        for(let item of items){
          item.itemName = item.itemName.toUpperCase();
          item.price = item.price + 2;
        }
        return items;
      })      
    )
  }

  getItemNames() : Observable<string[]>{
    return this.http.get<Item[]>(this.appUrl).pipe(
      map(items=>{
        let names : string[]=[];
        let i=0;
        for(let item of items){
          names[i++]=item.itemName;
        }
        return names;
      })      
    )
  }
}
