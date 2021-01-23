import { Component } from '@angular/core';
import { Lookup } from './my-dropdown/lookup.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-app'; 

  selectedCountry : Lookup = new Lookup();
  selectedState : Lookup = new Lookup();

  stateList : Lookup[] = [
    {
      "id" : 11,
      "code" : "GUJ",
      "description" : "Gujarat"
    },
    {
      "id" : 12,
      "code" : "BST",
      "description" : "Boston"
    },
    {
      "id" : 13,
      "code" : "LDN",
      "description" : "Lundon"
    }
  ]

  countryList : Lookup[] = [
    {
      "id" : 1,
      "code" : "IND",
      "description" : "India",
      "extra" : "Hindi"
    },
    {
      "id" : 2,  
      "code" : "US",
      "description" : "United States",
      "extra" : "Us English"
    },
    {
      "id" : 3,
      "code" : "UK",
      "description" : "United Kingdom",
      "extra" : "British English"
    }
  ];

  msgType : String = 'danger';

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

  getMessage(msg : string) : void {
    //alert(2);
    alert(msg);
  }

  getSelectedCountry(country : Lookup) : void {    
    console.log("Selected Country Is : " +country["description"]);
    this.selectedCountry = country;
  }

  getSelectedStates(states : Lookup) : void {
    console.log("Selected State Is : " +states["description"]);
    this.selectedState = states;
  }
}
