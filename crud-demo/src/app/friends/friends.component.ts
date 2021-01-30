import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendsList : string[] = ["keyur","denish","vinit","hiren","ravi"];

  name : string = 'Sachin';
  updateIdx : number = -1;

  constructor() { }

  ngOnInit() {
  }

  addFriend() : void {
    if(this.name === ''){
      alert("Please Enter Valid Name.");      
    }else if(this.updateIdx !== -1){
      this.friendsList[this.updateIdx] = this.name;
      this.updateIdx = -1;
    }else{
      this.friendsList.push(this.name);
    }    
  }

  edit(idx:number) : void {
    //alert(this.friendsList[idx]);
    this.updateIdx = idx;
    this.name = this.friendsList[idx];
  }

  delete(idx : number) : void {
    let confirmMsg  = confirm("Are you sure want to delete friend with name "+this.friendsList[idx] + "?");
    if(confirmMsg){
      this.friendsList.splice(idx,1);
    }
  }
}
