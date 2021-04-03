import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGuardService } from '../auth-guard.service';
import { ItemListComponent } from './item-list/item-list.component';
const routes : Routes = [
    {
        //path : 'admin' , component : AdminComponent, canActivate : [AuthGuardService],canActivateChild : [AuthGuardService], //for Eager Loading
        path : '' , component : AdminComponent, canActivate : [AuthGuardService],canActivateChild : [AuthGuardService], //for Lazy Loading
        children : [
            {path : 'items' , component : ItemListComponent},
            {path : 'orders' , component : OrdersComponent}
        ],        
    }    
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class AdminRoutingModule{
    constructor(){
        console.log("Admin Routing Module Loaded...!");
    }
}