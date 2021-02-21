import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { AngularQuestion } from './services/AngularQuestion';
import { JavaQuestion } from './services/JavaQuestion';
import { BigDataQuestion } from './services/BigDataQuestion';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AngularQuestion,
    JavaQuestion,
    BigDataQuestion
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
