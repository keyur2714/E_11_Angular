import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { AngularQuestion } from './services/AngularQuestion';
import { JavaQuestion } from './services/JavaQuestion';
import { BigDataQuestion } from './services/BigDataQuestion';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    ItemListComponent,
    ItemEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
