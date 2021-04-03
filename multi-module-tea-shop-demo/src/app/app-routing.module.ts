import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'admin' , loadChildren : () => import('./admin/admin.module').then(a => a.AdminModule)}, //For Lazy Loading
  {path : 'allitems', loadChildren : () => import('./order/order.module').then(o => o.OrderModule)},
  {path : 'login' , component : LoginComponent},
  {path : 'logout' , component : LogoutComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("App Routing Module Loaded...!");
  }
}
