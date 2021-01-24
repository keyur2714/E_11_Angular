import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  headerList : string[] = ["Name","Mobile No","Email","Course"];
  fieldList : string[] = ["name","mobileNo","email","course"];

  selectedStudent : Student = new Student();

  studentList : Student[] = [
    {
      "id" : 32,
      "name" : "keyur",
      "mobileNo" : "7387029671",
      "email" : "keyurjava27@gmail.com",
      "course" : "Angular"
    },
    {
      "id" : 26,
      "name" : "denish",
      "mobileNo" : "7387029172",
      "email" : "denishjava26@gmail.com",
      "course" : "BigData"
    }
  ];

  constructor() { }

  ngOnInit() {
    let student3 = new Student(44,"vinit","9879534778","vinit2cute@gmail.com","Marketing");
    let student4 = new Student()
    student4.id = 24;
    student4.name = "Darsh";
    student4.mobileNo = "9898011234";
    student4.email = "darsh_hy@yahoo.com";
    student4.course = "Java";

    this.studentList.push(student3);
    this.studentList.push(student4);


  }

  getSelectedStudent(event) : void { 
    this.selectedStudent = event;
  }
}
