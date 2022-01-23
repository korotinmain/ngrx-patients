import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../../../core/interfaces/order.interface';
import { OrdersFacade } from '../../orders/store/facades/orders.facade';
import { PatientsFacade } from '../../patients/store/facades/patients.facade';
import { map } from 'rxjs/operators';
import { IPatient } from '../../../core/interfaces/patient.interface';
import { DISPLAYED_COLUMNS } from '../../../core/constants/displayed-columns.constants';

@Component({
    selector: 'st-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {

    orders$: Observable<Array<IOrder>> = this.defaultOrders$;

    patients$: Observable<Array<IPatient>> = this.defaultPatients$;

    displayedOrdersColumns: Array<string> = DISPLAYED_COLUMNS.ORDERS;
    displayedPatientsColumns: Array<string> = DISPLAYED_COLUMNS.PATIENTS;


    constructor(private ordersFacade: OrdersFacade,
                private patientsFacade: PatientsFacade) {
    }

    filterPatients(event: Event): void {
        const pattern = (event.target as HTMLInputElement).value;
        this.patients$ = pattern
            ? this.defaultPatients$
                .pipe(
                    map((patient: Array<IPatient>) => patient.filter(item => this.trimAndToLower(item.firstName).includes(this.trimAndToLower(pattern)))),
                )
            : this.defaultPatients$;
    }

    filterOrders(event: Event): void {
        const pattern = (event.target as HTMLInputElement).value;
        this.orders$ = pattern
            ? this.defaultOrders$
                .pipe(
                    map((order: Array<IOrder>) => order.filter(item => this.trimAndToLower(item.orderName).includes(this.trimAndToLower(pattern)))),
                )
            : this.defaultOrders$;
    }

    trimAndToLower(text: string): string {
        return text.trim().toLowerCase();
    }

    ngOnInit(): void {
    }

    changeFavoritePatientState(patient: IPatient, state: boolean): void {
        const editedPatient = {...patient, isFavorite: state};
        this.patientsFacade.edit(editedPatient);
    }

    changeFavoriteOrderState(order: IOrder, state: boolean): void {
        const editedOrder = {...order, isFavorite: state};
        this.ordersFacade.edit(editedOrder);
    }

    get defaultOrders$(): Observable<Array<IOrder>> {
        return this.ordersFacade.orders$.pipe(
            map((order: Array<IOrder>) => order.filter(item => item.isFavorite)),
        );
    }

    get defaultPatients$(): Observable<Array<IPatient>> {
        return this.patientsFacade.patients$.pipe(
            map((patient: Array<IPatient>) => patient.filter(item => item.isFavorite)),
        )
    }
}
