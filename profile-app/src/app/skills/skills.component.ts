import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit,AfterViewInit {

  @Input("testMessage") testMsg : String = '';
  @Input() skills: Skill[]=[];

  constructor() { 
    //alert("Always First");
  }

  ngOnInit() {
    //alert("Hello From Init");
  }

  ngAfterViewInit() {
    //alert(this.testMsg);
  }

}
