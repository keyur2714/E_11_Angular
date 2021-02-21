import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items : Item[] = [];

  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(
      (data : Item[])=>{
        this.items = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
