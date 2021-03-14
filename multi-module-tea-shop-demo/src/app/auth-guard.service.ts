import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{
  
  
  constructor(private router : Router,private authenticationService : AuthenticationService) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean  {
      
      if(this.authenticationService.isAuthenticated){
        return true;
      }
      this.authenticationService.successUrl=state.url;
      this.router.navigate(['login']);
      return false;
  }

  canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    let currentUser : User = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if(currentUser.role === 'USER'){
      alert("Sorry ! but you do not have permission to access this screen...!");
      return false;
    }
    return true;
  }
}
