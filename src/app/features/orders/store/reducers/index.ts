import { IOrdersListState, ordersReducer } from './orders.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const ordersFeatureName = 'ordersList';

export interface IState {
    readonly ordersList: IOrdersListState
}

export const ordersReducerMap: ActionReducerMap<IState> = {
    ordersList: ordersReducer,
}
