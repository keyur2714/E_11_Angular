import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { User } from './user.model';
import { Student } from './student.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm : FormGroup;
  studentForm : FormGroup;
  isSubmitted : boolean = false;
  user : User = new User();

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    //this.createUserForm();
    this.createUserFormWithBuilder();
    this.createStudentForm();
  }

  createStudentForm() : void{
    this.studentForm = this.formBuilder.group(new Student());
    this.studentForm.get('rollNo').setValidators(Validators.required);
  }

  createUserFormWithBuilder() : void {
    this.userForm = this.formBuilder.group(
      {
        name : this.formBuilder.control('keyur',[Validators.required,Validators.minLength(3)]),
        city : this.formBuilder.control('',Validators.required),
        mobileNo : this.formBuilder.control('',[Validators.minLength(10),Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]),
        email : this.formBuilder.control('',[Validators.required,Validators.email]),
        gender : this.formBuilder.control('M'),
        favColor : this.formBuilder.control(''),
        hobbies : this.formBuilder.array([this.formBuilder.control('')])
      }
    )
  }

  createUserForm() : void{
    this.userForm = new FormGroup(
      {
        name : new FormControl('keyur',[Validators.required,Validators.minLength(3)]),
        city : new FormControl('',Validators.required),
        mobileNo : new FormControl('',[Validators.minLength(10),Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]),
        email : new FormControl('',[Validators.required,Validators.email]),
        gender : new FormControl('M'),
        hobbies : new FormArray([new FormControl('')])
      }
    );
  }

  save() : void {
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.isSubmitted = true;
      this.user = this.userForm.value;
      if(this.user.gender === 'M')
        this.user.gender = 'Male';
      else  
        this.user.gender = 'Female';
    }
  }

  setValidation() : void{
    //alert(this.userForm.get('gender').value);
    if(this.userForm.get('gender').value === 'M'){
      this.userForm.get('favColor').setValidators(Validators.required);
      this.userForm.get('favColor').updateValueAndValidity();
    }
  }

  addNewHobby() : void{
    //let newHobby = new FormControl('');
    let newHobby = this.formBuilder.control('');
    (<FormArray>this.userForm.get('hobbies')).push(newHobby);
  }
}
