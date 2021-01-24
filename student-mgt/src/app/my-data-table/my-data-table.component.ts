import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-data-table',
  templateUrl: './my-data-table.component.html',
  styleUrls: ['./my-data-table.component.css']
})
export class MyDataTableComponent implements OnInit {

  @Input() headerList : string[] = [];
  @Input() fieldList : string[] = [];
  @Input() dataList : any[] = [];

  @Input() textColor = 'info';
  @Input() bgColor = 'dark';

  @Output("getSelectedRow") selectedItem = new EventEmitter<any>();
  sitem : any;
  constructor() { }

  ngOnInit() {
  }

  getSelectedRow(idx : number) : void{
    //console.log(data);
    this.sitem = this.dataList[idx];
    this.selectedItem.emit(this.dataList[idx]);
  }

}
