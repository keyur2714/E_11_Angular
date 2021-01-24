import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  selectedCourse : Course = new Course();
  courseList : Course[] = [];
  headerList : string[] = ["Corse Code","Course Name","Fees"];
  fieldList : string[] = ["courseCode","courseName","fees"];

  constructor() { }

  ngOnInit() {
    let course1 = new Course(10,"ANG","Angular",13000);
    let course2 = new Course(20,"SPK","Spark",11800);
    let course3 = new Course(30,"RACT","React",13000);
    let course4 = new Course(40,"JAVA","Core Java",12000);
    this.courseList = [course1,course2,course3];
    this.courseList.push(course4);
  }

  getSelectedCourse(event) : void{
    this.selectedCourse = event;
  }
}
