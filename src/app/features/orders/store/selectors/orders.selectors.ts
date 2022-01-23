import { IOrdersListState } from '../reducers/orders.reducer';

export const ordersListSelect = (state: IOrdersListState) => state.orders;
export const ordersListLoaded = (state: IOrdersListState) => state.isLoaded;
