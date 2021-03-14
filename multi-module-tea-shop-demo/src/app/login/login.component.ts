import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userName : string = '';
  passWord : string = '';

  constructor(private authenticationService : AuthenticationService,private router: Router) { }

  ngOnInit() {
  }

  login(frm : NgForm) : void {
    if(frm.valid){
      this.authenticationService.authenticate(this.userName,this.passWord).subscribe(
        (data : User)=>{
          if(data === undefined){
            alert("Invalid username or password!.");
          }else{
            sessionStorage.setItem("loggedInUser",JSON.stringify(data));
            this.router.navigate([this.authenticationService.successUrl]);
          }
        },
        (error)=>{

        }
      )
    }
  }
}
