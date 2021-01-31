import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  msg : string = 'Hello Radhe Krishna...!';

  textColor : string = 'red';

  @ViewChild("m",{static : false})
  mm : ElementRef;

  constructor() { 
    console.log("Message Component Object Created...!");
  }

  ngOnInit() {
  }

  getReverseMessage(msg : string) : string {
    console.log(msg.split('').reverse().join(''));
    let revMsg = msg.split('').reverse().join('');
    this.msg = revMsg;
    this.mm.nativeElement.style.background = 'yellow';
    return revMsg;
  }

}
