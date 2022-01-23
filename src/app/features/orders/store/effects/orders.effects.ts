import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { getOrders, getOrdersSuccess, getOrdersFailed } from '../actions';
import { OrdersService } from '../../../../core/services/orders-service/orders.service';

@Injectable({providedIn: 'root'})
export class OrdersEffects {

    constructor(private actions$: Actions,
                private ordersService: OrdersService) {
    }

    loadOrders$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getOrders),
            mergeMap(() =>
                this.ordersService.getOrdersList()
                    .pipe(
                        map(orders => getOrdersSuccess({orders})),
                        catchError(error => [getOrdersFailed(error)]),
                    ),
            ),
        ),
    )
}
