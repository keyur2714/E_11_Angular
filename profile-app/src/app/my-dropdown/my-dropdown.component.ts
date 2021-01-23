import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lookup } from './lookup.model';


@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input() dataList : Lookup[] = [];

  @Output() getSelectedItem = new EventEmitter<Lookup>();

  @Input() selectedItem : Lookup = new Lookup();

  str : string = 'Hello Radhe Krishna...!';

  constructor() { }

  ngOnInit() {    
    if(this.selectedItem.description === '')
      this.selectedItem = this.dataList[1];
  }

  setValue() : void{
    //alert(1);
    console.log(this.selectedItem);
    this.getSelectedItem.emit(this.selectedItem);
  }

}
