import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated : boolean = false;
  loggedInUser : User;

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
    this.isAuthenticated = this.authenticationService.isAuthenticated;
    this.loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  }

}
