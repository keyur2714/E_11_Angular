import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items : Item[] = [];

  constructor(private itemService : ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() : void {
    this.itemService.getItems().subscribe(
      (data)=>{
        this.items = data;
      }
    )
  }
}
