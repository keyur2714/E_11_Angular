import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  //property / attribute
  @Input("message") msg : String = 'Hello Radhe Krishna...!';
  //property / attribute
  @Input("message-type") msgType : String = 'info';

  @Output("getFormattedMessage") getFormattedMsg = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    //alert(1);
    this.getFormattedMsg.emit("Hello From Child..."+this.msg);
  }

}
