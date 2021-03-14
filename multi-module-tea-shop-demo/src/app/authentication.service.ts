import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated : boolean = false;
  successUrl : string = 'home';
  appUrl : string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  authenticate(userName : string,password ?: string) : Observable<User> {
    return this.http.get<User[]>(this.appUrl).pipe(
      map(users=>{
        for(let user of users){
          if(user.username === userName && user.password === password){
            this.isAuthenticated = true;
            return user;
          }            
        }        
      })
    );
  }
}
