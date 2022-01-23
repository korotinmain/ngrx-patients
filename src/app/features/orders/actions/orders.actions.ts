import { createAction, props } from '@ngrx/store';
import { IOrder } from '../../../core/interfaces/order.interface';

export const retrievedOrdersList = createAction(
    '[Order List/API] Retrieve Orders Success',
    props<{ orders: ReadonlyArray<IOrder> }>()
);
