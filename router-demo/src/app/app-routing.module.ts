import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FriendsComponent } from './friends/friends.component';


const routes: Routes = [
  {path : 'home/:msg' , component : HomeComponent},
  {path : 'about-us' , component : AboutUsComponent},
  {path : 'contact-us' , component : ContactUsComponent},
  {path : 'friends/:name/:surname' ,  component : FriendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
