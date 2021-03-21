import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit, OnChanges } from '@angular/core';
import { Item } from '../item-list/item.model';
import { NgForm } from '@angular/forms';
import { ItemService } from '../item-list/item.service';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit,OnChanges {
  
  isUpdate : boolean = false;
  item : Item = new Item();
  @Input() itemId : number;

  @Output() isSaved = new EventEmitter<boolean>();

  constructor(private itemService : ItemService) { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {    
    if(this.itemId > 0){
      this.itemService.getItemById(this.itemId).subscribe(
        (data : Item) => {
          this.item = data;
          this.isUpdate = true;
        },
        (error)=>{

        }
      )
    }
  }

  save(frm:NgForm) : void {
    if(frm.valid){
      if(this.isUpdate){
        this.itemService.update(this.item).subscribe(
          (data : Item) =>{
            if(data.id > 0){
              alert("Item Updated Successfully.");
              this.isSaved.emit(true);
              this.isUpdate = false;
              this.itemId = 0;
              this.item = new Item();
            }
          },
          (error)=>{
            console.log("Error : "+error);
          }           
        )    
      }else{
        this.itemService.save(this.item).subscribe(
          (data : Item)=>{
            if(data.id > 0){
              alert("Item Created Successfully.");
              this.isSaved.emit(true);
            }
          },
          (error)=>{
            console.log("Error : "+error);
          }
        )
      }      
    }
  }

}
