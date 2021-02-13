import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm : FormGroup;
  isSubmitted : boolean = false;
  user : User = new User();

  constructor() { }

  ngOnInit() {
    this.createUserForm();
  }

  createUserForm() : void{
    this.userForm = new FormGroup(
      {
        name : new FormControl('keyur',[Validators.required,Validators.minLength(3)]),
        city : new FormControl('',Validators.required),
        mobileNo : new FormControl('',[Validators.minLength(10),Validators.required,Validators.pattern('^[0-9]+$')]),
        email : new FormControl('',[Validators.required,Validators.email]),
        gender : new FormControl('M')
      }
    );
  }

  save() : void {
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.isSubmitted = true;
      this.user = this.userForm.value;
    }
  }
}
