import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  msg : string = 'Hello Welcome to Angular World...!';

  constructor() {
    console.log("Message Component Object Created...!");
  }

  ngOnInit() {
    console.log("Message Component Initialized...!");
  }

}
