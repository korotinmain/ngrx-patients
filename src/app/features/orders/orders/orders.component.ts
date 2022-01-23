import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Store } from '@ngrx/store';
import { OrdersService } from '../../../core/services/orders-service/orders.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { retrievedOrdersList } from '../actions';
import { selectOrders } from '../selectors/orders.selectors';
import { IOrder } from '../../../core/interfaces/order.interface';

@Component({
    selector: 'st-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit, OnDestroy {
    private _ngUnsubscribe = new Subject();

    orders$ = this.store.select(selectOrders);
    displayedColumns: Array<string> = ['creator', 'orderNum', 'orderName', 'identifier', 'flags', 'status', 'favorites'];
    routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

    constructor(private store: Store<{orders: Array<IOrder>}>,
                private ordersService: OrdersService) {
    }

    ngOnInit() {
    }

    getOrdersList(): void {
        this.ordersService.getOrdersList()
            .pipe(
                takeUntil(this._ngUnsubscribe),
            )
            .subscribe(orders => this.store.dispatch(retrievedOrdersList({orders})));
    }

    ngOnDestroy(): void {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
