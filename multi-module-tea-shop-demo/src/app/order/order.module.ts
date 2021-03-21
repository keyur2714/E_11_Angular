import { NgModule } from '@angular/core';
import { ItemsComponent } from './items/items.component';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order.roting.module';

@NgModule({
    declarations : [
        ItemsComponent
    ],
    imports : [
        CommonModule,
        OrderRoutingModule
    ]
})
export class OrderModule {
    constructor(){
        console.log("Order Module Loaded...!");
    }
}