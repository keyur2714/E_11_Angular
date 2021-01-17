import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input("message") msg : String = 'Hello Radhe Krishna...!';
  @Input("message-type") msgType : String = 'info';

  constructor() { }

  ngOnInit() {
  }

}
