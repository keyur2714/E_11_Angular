import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { ItemsComponent } from './items/items.component';
import { OrdersComponent } from './orders/orders.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
    declarations :[
        AdminComponent,
        ItemsComponent,
        OrdersComponent
    ],
    imports : [
        CommonModule,
        AdminRoutingModule
    ],
    providers : []
})
export class AdminModule{
    constructor(){
        console.log("Admin Module Loaded...!");
    }    
}