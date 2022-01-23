import { createFeatureSelector } from '@ngrx/store';
import { IOrder } from '../../../core/interfaces/order.interface';

export const selectOrders = createFeatureSelector<ReadonlyArray<IOrder>>('orders');
