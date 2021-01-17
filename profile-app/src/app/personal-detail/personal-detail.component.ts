import { Component, OnInit, Input } from '@angular/core';
import { Person } from './person.model';
import { Skill } from '../skills/skill.model';

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
    person.description = "Database Administrator";
    person.firstName = "Keyur";
    person.lastName = "Thakor";
    person.city = "Surat";
    person.age = 33;
    person.mobileNo = "7387029681";
    person.email = "keyurjava27@gmail.com";
    let skill1 = new Skill("Database",["Sql Server,MySql,MongoDb"]);
    let skill2 = new Skill("OperatingSystem",["Windows","Ubantu"]);
    let skill3 = new Skill("Tools",["SMS","MySql WorkBench"]);
    person.skills.push(skill1);
    person.skills.push(skill2);
    person.skills.push(skill3);

    let person1 = new Person();
    person1.description = "Software Engineer";
    person1.firstName = "Denish";
    person1.lastName = "Patel";
    person1.city = "Surat";
    person1.age = 34;
    person1.mobileNo = "7387029121";
    person1.email = "denishjava26@gmail.com";

    let skill11 = new Skill("Database",["Sql Server,MySql,MongoDb"]);
    let skill22 = new Skill("OperatingSystem",["Windows","Ubantu"]);
    let skill33 = new Skill("Tools",["SMS","Eclipse","Vs Code"]);
    let skill44 = new Skill("Language",["Java","Type Script","Java Script"]);
    person1.skills.push(skill11);
    person1.skills.push(skill22);
    person1.skills.push(skill33);
    person1.skills.push(skill44);

    let person2 = new Person();
    person2.description = "Software Engineer ||";
    person2.firstName = "Vinit";
    person2.lastName = "Shah";
    person2.city = "Mumbai";
    person2.age = 34;
    person2.mobileNo = "7387029971";
    person2.email = "vinit2cute@gmail.com";

    let skill221 = new Skill("Database",["Sql Server,MySql,Oracle"]);
    let skill222 = new Skill("OperatingSystem",["Windows","Linux"]);
    let skill223 = new Skill("Language",["C","C++","Python"]);

    person2.skills = [skill221,skill222,skill223];

    let person3 = new Person("Cricketer","Sachin","Tendulkar","Mumbai",40,"9898101010","sachin1010@gmail.com");    
    let skill331 = new Skill("Batting",["Right hand batsman"]);
    let skill332 = new Skill("Bowling",["Leg Break Bowler","Off Break Bowler"]);
    person3.skills = [skill331,skill332];

    this.personList.push(person);
    this.personList.push(person1);
    this.personList.push(person2);
    this.personList.push(person3);
  }

}
