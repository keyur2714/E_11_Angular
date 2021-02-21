import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../services/IQuestion';
import { BigDataQuestion } from '../services/BigDataQuestion';
import { AngularQuestion } from '../services/AngularQuestion';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers : [
    {provide : IQuestion , useClass : AngularQuestion}
  ]
})
export class ExamComponent implements OnInit {

  questions : string = '';

  constructor(private question : IQuestion) { }

  ngOnInit() {
    this.questions = this.question.askQuestion();
  }

}
