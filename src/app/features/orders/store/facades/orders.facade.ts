import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IOrder } from '../../../../core/interfaces/order.interface';
import { editOrder, getOrders } from '../actions';
import { getOrdersList } from '../selectors';
import { IState } from '../reducers';

@Injectable()
export class OrdersFacade {

    orders$: Observable<Array<IOrder>> = this.store.pipe(select(getOrdersList))

    constructor(private store: Store<IState>) {
    }

    get(): void {
        this.store.dispatch(getOrders());
    }

    edit(order: IOrder): void {
        this.store.dispatch(editOrder({order}));
    }
}
