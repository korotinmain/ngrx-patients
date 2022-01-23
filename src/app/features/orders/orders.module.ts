import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';

import { OrdersComponent } from './orders/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { MatTableModule } from '@angular/material/table';
import { ordersFeatureName, ordersReducerMap } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from './store/effects/orders.effects';
import { OrdersFacade } from './store/facades/orders.facade';

@NgModule({
    declarations: [OrdersComponent],
    imports: [CommonModule,
        SharedModule,
        OrdersRoutingModule,
        MatTableModule,
        StoreModule.forFeature(ordersFeatureName, ordersReducerMap),
        EffectsModule.forFeature([OrdersEffects]),
    ],
    providers: [OrdersFacade],
})
export class OrdersModule {
}
