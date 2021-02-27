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
  itemId : number = 0;

  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.getItemList();
  }

  getItemList() : void{
    this.itemService.getItems().subscribe(
      (data : Item[])=>{
        this.items = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  refreshItems(isSaved : boolean) : void {
    if(isSaved){
      this.getItemList();
    }
  }

  edit(itemId : number) : void {    
    this.itemId = itemId;
  }

  delete(itemId : number) : void {
    let confirmMsg = confirm("Are you sure want to delete item with Id :  "+itemId + "?");
    if(confirmMsg){
      this.itemService.delete(itemId).subscribe(
        ()=>{
          alert("Item Deleted Successfully with Id "+itemId);
          this.getItemList();
        },
        (error)=>{
  
        }
      )
    }    
  }

}
