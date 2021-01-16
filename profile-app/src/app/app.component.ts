import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-app'; 

  searchString : String = "";
  friends : String[] = ["keyur","denish","vnit","ravi"];

  searchPerson(value : String) : void {
    //alert("Hello Radhe Krishna...!"+value);
    this.searchString = value;
  }

  addFriend(friendName : String) : void {
    let findInd : number = this.friends.indexOf(friendName);
    if(findInd === -1)
      this.friends.push(friendName);
     else
      alert(friendName+ " Already Exists...!");
  }
}
