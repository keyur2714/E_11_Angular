import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  

  constructor(private router:Router) { }

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {    
    if(sessionStorage.getItem("loggedInUser")){
      let loggedInUser : User=JSON.parse(sessionStorage.getItem("loggedInUser"));
      console.log("=============="+loggedInUser.token+"**********");
      let token = loggedInUser.token;
      if(token){
        req = req.clone({
          setHeaders : {Authoriation : 'Berear '+token}
        })
      }
    }    
    return next.handle(req);
  }
}
