import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Radhe Krishna...!'; // instance variable
  message : string = "Good Afternoon...!";
  constructor(){
    console.log("AppComponent Object Created...!");
  }
}
