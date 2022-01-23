import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Observable } from 'rxjs';
import { OrdersFacade } from '../store/facades/orders.facade';
import { IOrder } from '../../../core/interfaces/order.interface';
import { DISPLAYED_COLUMNS } from '../../../core/constants/displayed-columns.constants';

@Component({
    selector: 'st-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {

    orders$: Observable<Array<IOrder>> = this.ordersListFacade.orders$;
    displayedColumns: Array<string> = DISPLAYED_COLUMNS.ORDERS;
    routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

    constructor(private ordersListFacade: OrdersFacade) {
    }

    ngOnInit() {

    }

    getOrdersList(): void {
        this.ordersListFacade.get();
    }

    changeFavoriteOrderState(order: IOrder, state: boolean): void {
        const editedOrder = {...order, isFavorite: state};
        this.ordersListFacade.edit(editedOrder);
    }
}
