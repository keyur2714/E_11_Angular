import { Component, OnInit, Input } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  @Input() search : String = "";  

  // firstName : String = '';
  // lastName : String = '';
  // city : String = '';
  // age : number = 0;
  // mobileNo :  String = '';
  // email : String = '';
  personList : Person[] = [];

  constructor() { }

  ngOnInit() {    
    let person = new Person();
    person.firstName = "Keyur";
    person.lastName = "Thakor";
    person.city = "Surat";
    person.age = 33;
    person.mobileNo = "7387029681";
    person.email = "keyurjava27@gmail.com";

    let person1 = new Person();
    person1.firstName = "Denish";
    person1.lastName = "Patel";
    person1.city = "Surat";
    person1.age = 34;
    person1.mobileNo = "7387029121";
    person1.email = "denishjava26@gmail.com";

    let person2 = new Person();
    person2.firstName = "Vinit";
    person2.lastName = "Shah";
    person2.city = "Mumbai";
    person2.age = 34;
    person2.mobileNo = "7387029971";
    person2.email = "vinit2cute@gmail.com";

    let person3 = new Person("Sachin","Tendulkar","Mumbai",40,"9898101010","sachin1010@gmail.com");

    this.personList.push(person);
    this.personList.push(person1);
    this.personList.push(person2);
    this.personList.push(person3);
  }

}
