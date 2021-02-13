import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from './course.model';
import { Inquiry } from './inquiry.model';

@Component({
  selector: 'app-inquiry-entry',
  templateUrl: './inquiry-entry.component.html',
  styleUrls: ['./inquiry-entry.component.css']
})
export class InquiryEntryComponent implements OnInit {

  courseList : Course[] = [];
  inquiry : Inquiry = new Inquiry();
  isSubmitted : boolean = false;

  constructor() { }

  ngOnInit() {
    let course1 = new Course(1,"ANG","Angular",13800);
    let course2 = new Course(2,"JAVA","Core Java",11800);
    let course3 = new Course(3,"PYT","Python",8800);
    this.courseList = [course1,course2,course3];
    this.inquiry.gender = 'M';
    this.inquiry.course = course1;
  }

  save(frm : NgForm) : void {
    console.log(frm);
    if(frm.valid){
      console.log(frm.value);
      //this.inquiry = frm.value;
      console.log(this.inquiry.name +" "+this.inquiry.email);
      console.log(frm.controls["name"].value);
      console.log(frm.controls["email"].value);
      console.log(frm.controls["mobileNo"].value);
      console.log(frm.controls["gender"].value === 'M' ? 'Male' : 'Female');
      console.log(frm.controls["course"].value);
      this.isSubmitted = true;
    }        
  }

  cancel(frm : NgForm): void{
    this.inquiry = new Inquiry();    
    this.inquiry.gender = 'M';
    let course1 = new Course(1,"ANG","Angular",13800);
    this.inquiry.course = course1;
  }

}
