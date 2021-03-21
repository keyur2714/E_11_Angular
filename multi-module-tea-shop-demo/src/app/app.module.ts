import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminModule } from './admin/admin.module';
import { AuthInterceptorService } from './auth-interceptor.service';
import { CartDetailComponent } from './order/cart-detail/cart-detail.component';
import { OrderModule } from './order/order.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    LoginComponent,
    LogoutComponent,
    CartDetailComponent,    
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    HttpClientModule,
    AdminModule,   
    OrderModule,     
    AppRoutingModule        
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi : true
    }     
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App Module Loaded...!")
  }
 }
