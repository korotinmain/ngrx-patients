import { createAction, props } from '@ngrx/store';
import { IOrder } from '../../../core/interfaces/order.interface';
import { IPatient } from '../../../core/interfaces/patient.interface';

export const retrievedFavoriteOrdersList = createAction(
    '[Favorite Orders List] Retrieve Favorite Orders',
    props<{ orders: ReadonlyArray<IOrder> }>()
);

export const retrievedFavoritePatientsList = createAction(
    '[Favorite Patients List] Retrieve Favorite Patients',
    props<{ patients: ReadonlyArray<IPatient> }>()
);
