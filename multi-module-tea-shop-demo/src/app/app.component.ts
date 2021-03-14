import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi-module-tea-shop-demo';
  isAuthenticated : boolean = false;
  constructor(private authenticationService : AuthenticationService) {
  }

  checkIsLoggedIn() : void{
    this.isAuthenticated = this.authenticationService.isAuthenticated;
  }
}
