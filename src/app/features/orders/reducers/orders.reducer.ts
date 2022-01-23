import { createReducer, on } from '@ngrx/store';
import { IOrder } from '../../../core/interfaces/order.interface';
import { retrievedOrdersList } from '../actions';

export const initialState: ReadonlyArray<IOrder> = [];

export const ordersReducer = createReducer(
    initialState,
    on(retrievedOrdersList, (state, {orders}) => orders),
);
