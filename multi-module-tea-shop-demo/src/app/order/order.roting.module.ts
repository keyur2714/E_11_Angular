import { NgModule } from '@angular/core';
import { ItemsComponent } from './items/items.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

const routes = [                    
        {
            path : '' , component : ItemsComponent, canActivate : [AuthGuardService],        
        },
        {
            path : 'cartDetail' , component : CartDetailComponent
        }                
]
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class OrderRoutingModule {
    constructor(){
        console.log("Order Routing Module Loaded....!");
    }
}