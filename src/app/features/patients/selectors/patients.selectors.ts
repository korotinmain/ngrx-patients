import { createFeatureSelector } from '@ngrx/store';
import { IOrder } from '../../../core/interfaces/order.interface';

export const selectPatients = createFeatureSelector<ReadonlyArray<IOrder>>('patients');
