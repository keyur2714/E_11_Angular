import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-demo';

  constructor(private router:Router){}

  callFriends() : void{    
    let friendName = 'Sachin';
    let friendSurName = 'Tendulkar';
    this.router.navigate(['friends',friendName,friendSurName],{queryParams: {city:'surat',mobileNo:'9898012121'}});
  }
}
