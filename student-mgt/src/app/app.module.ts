import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDataTableComponent } from './my-data-table/my-data-table.component';
import { CourseComponent } from './course/course.component';
import { StudentsComponent } from './students/students.component';
import { DemoComponent } from './demo.component';
import { DeptListComponent } from './dept-list/dept-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDataTableComponent,
    CourseComponent,
    StudentsComponent,
    DemoComponent,
    DeptListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
