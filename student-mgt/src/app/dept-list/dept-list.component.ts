import { Component, OnInit } from '@angular/core';
import { Dept } from './dept.model';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  headerList : string[] = ["Dept Code","Dept Name"];
  fieldList : string[] = ["deptCode","deptName"];

  selectedDept : Dept = new Dept();

  deptList : Dept[] = [
    {
      "id":11,
      "deptCode":"IT",
      "deptName":"Inforamtaion Technology"
    },
    
    {
      "id":12,
      "deptCode":"SALES",
      "deptName":"Sales Department"
    },    
    {
      "id":13,
      "deptCode":"HR",
      "deptName":"Human Resource Mgt"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  getSelectedDept(event) : void{
    this.selectedDept = event;
  }
}
