import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  appUrl : string = 'http://localhost:3000/items';

  constructor(private http : HttpClient) { }

  getItems() : Observable<Item[]> {
    return this.http.get<Item[]>(this.appUrl);
  }
}
