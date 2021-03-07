import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  firstName : string = '';
  lastName : string = '';
  city : string = '';
  mobileNo : string = '';

  constructor(private activatedRoute: ActivatedRoute,private location : Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.firstName = params.name;
        this.lastName = params.surname;
        //alert(params.name+" - "+params.surname);
      }
    )
    this.activatedRoute.queryParams.subscribe(
      (queryParams)=>{
        this.city = queryParams.city;
        this.mobileNo = queryParams.mobileNo;
        //alert(queryParams.city+" ** "+queryParams.mobileNo);
      }
    )    
  }

  back() : void{
    this.location.back();
  }

}
