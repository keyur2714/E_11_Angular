import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { SkillsComponent } from './skills/skills.component';
import { MessageComponent } from './message/message.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailComponent,
    SkillsComponent,
    MessageComponent,
    MyDropdownComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
