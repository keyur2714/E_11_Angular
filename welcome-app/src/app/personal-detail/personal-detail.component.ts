import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  firstName : String = "keyur";
  lastName : String = "Thakor";
  age : number = 34;
  city : String = "surat";
  designation : String = '';

  constructor() { }

  ngOnInit() {
    this.designation = "Software Programmer";
  }

}
