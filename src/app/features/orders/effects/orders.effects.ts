// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { OrdersService } from '../../../core/services/orders-service/orders.service';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { EMPTY } from 'rxjs';
// import { actionGetOrders, GET_ORDERS } from '../actions';
//
// @Injectable()
// export class OrdersEffects {
//
//     constructor(private actions$: Actions,
//                 private ordersService: OrdersService) {
//     }
//
//     getOrders$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(GET_ORDERS),
//             mergeMap(() => this.ordersService.getOrdersList()
//                 .pipe(
//                     map(orders => ({type: '[Orders API] Orders Loaded Success', orders})),
//                     catchError(() => EMPTY),
//                 ),
//             ),
//         ),
//     );
// }
