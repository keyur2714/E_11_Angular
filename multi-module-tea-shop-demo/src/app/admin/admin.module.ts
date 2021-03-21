import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { OrdersComponent } from './orders/orders.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations :[
        AdminComponent,        
        ItemListComponent,
        ItemEntryComponent,
        OrdersComponent
    ],
    imports : [
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ],
    providers : []
})
export class AdminModule{
    constructor(){
        console.log("Admin Module Loaded...!");
    }    
}