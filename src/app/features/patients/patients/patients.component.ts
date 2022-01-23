import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Observable, Subject } from 'rxjs';
import { IPatient } from '../../../core/interfaces/patient.interface';
import { PatientsFacade } from '../store/facades/patients.facade';

@Component({
    selector: 'st-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent implements OnInit, OnDestroy {

    displayedColumns: Array<string> = ['fullName', 'middleName', 'lastName', 'age', 'favorites'];

    private _ngUnsubscribe = new Subject();

    patients$: Observable<Array<IPatient>> = this.patientsListFacade.patients$;
    routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

    constructor(private patientsListFacade: PatientsFacade) {
    }

    ngOnInit() {
    }

    getPatientsList(): void {
        this.patientsListFacade.get();
    }

    ngOnDestroy(): void {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
