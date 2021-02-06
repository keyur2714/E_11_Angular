import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorDirective } from './direcitives/color.directive';
import { ValidationDirective } from './direcitives/validation.directive';
import { MyifDirective } from './direcitives/myif.directive';
import { MyloopDirective } from './direcitives/myloop.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    ValidationDirective,
    MyifDirective,
    MyloopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
