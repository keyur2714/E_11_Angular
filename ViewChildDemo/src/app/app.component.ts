import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'ViewChildDemo';

  reverseMsg : string = '';
  msg : string = 'Sachin Tendulkar';

  @ViewChild("heading",{static : true}) 
  h : ElementRef;

  @ViewChild(MessageComponent,{static : false})
  messageComponent : MessageComponent;

  ngOnInit(): void {    
    console.log(this.h);
    this.h.nativeElement.innerHTML = 'Hello Good Afternoon...!';
    this.h.nativeElement.style.color = 'red';
    this.h.nativeElement.style.fontSize = '40px';
  }  

  revMsg() : void{
    this.reverseMsg = this.messageComponent.getReverseMessage(this.msg);    
    this.messageComponent.textColor = 'blue';
  }

}
