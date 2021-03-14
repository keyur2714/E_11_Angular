import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ItemsComponent } from './items/items.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGuardService } from '../auth-guard.service';
const routes : Routes = [
    {
        path : 'admin' , component : AdminComponent, canActivate : [AuthGuardService],canActivateChild : [AuthGuardService],
        children : [
            {path : 'items' , component : ItemsComponent},
            {path : 'orders' , component : OrdersComponent}
        ]
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