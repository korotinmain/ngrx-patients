import { createAction, props } from '@ngrx/store';
import { IOrder } from '../../../../core/interfaces/order.interface';

// Get orders
export const getOrders = createAction('[Orders list] Get orders');
export const getOrdersSuccess = createAction('[Orders list] Get orders success', props<{ orders: Array<IOrder> }>());
export const getOrdersFailed = createAction('[Orders list] Get orders failed', (error: Error) => ({ error }));
