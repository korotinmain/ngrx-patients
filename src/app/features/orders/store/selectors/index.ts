import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, IOrdersListState } from '../reducers/orders.reducer';
import { ordersFeatureName } from '../reducers';

const getOrdersModule = createFeatureSelector<IOrdersListState>(ordersFeatureName);

export const {
    selectEntities,
    selectAll,
    selectIds,
    selectTotal
} = adapter.getSelectors(getOrdersModule);

export const getOrdersList = createSelector(
    getOrdersModule,
    selectAll
)
