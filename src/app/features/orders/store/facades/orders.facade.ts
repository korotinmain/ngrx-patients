import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IOrder } from '../../../../core/interfaces/order.interface';
import { getOrders } from '../actions';
import { getOrdersList } from '../selectors';

@Injectable()
export class OrdersFacade {

    orders$: Observable<Array<IOrder>> = this.store.pipe(select(getOrdersList))

    constructor(private store: Store) {
    }

    get(): void {
        this.store.dispatch(getOrders());
    }
}
