import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    PersonalDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Object Created...!");
  }
}
