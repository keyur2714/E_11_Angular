import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Pipes Demo';

  firstName : string = 'Keyur';

  person = {
    name : "keyur",
    city : "surat",
    mobileNo : "7387029671",
    email : "keyurjava27@gmail.com",
    accNo : "98980121217"
  };

  birthDate : Date = new Date("1986-12-27 02:05:00");

  salary : number = 1000;

  seqNo : number = 0;

  numberObservable : Observable<number> = interval(1000);
  
  constructor(private testService : TestService){}

  ngOnInit(): void {
    // this.numberObservable.subscribe(
    //   (data)=>{
    //      this.seqNo = data; 
    //   }
    // )
  }

  sum(num1 : number,num2 : number) : number {
    return num1 + num2;
  }

  mul(num1 : number,num2 : number) : number {  
    return this.testService.mul(num1,num2);
  }
  

}
