import { Action, createReducer, on } from '@ngrx/store';
import { IOrder } from '../../../../core/interfaces/order.interface';
import { editOrder, getOrdersSuccess } from '../actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface IOrdersListState extends EntityState<IOrder> {
    orders: Array<IOrder>;
    isLoaded?: boolean;
    errorMessage?: string;
}

export const adapter: EntityAdapter<IOrder> = createEntityAdapter<IOrder>({
    selectId: (order) => order.orderNum,
    sortComparer: false,
});

const initialState: IOrdersListState = adapter.getInitialState({
    orders: [],
});

export const reducer = createReducer(
    initialState,
    on(getOrdersSuccess, (state, {orders}) => adapter.addMany(orders, state)),
    on(editOrder, (state, {order}) => adapter.updateOne({id: order.orderNum, changes: order}, state)),
);

export function ordersReducer(state: IOrdersListState | null, action: Action) {
    return reducer(state, action);
}
