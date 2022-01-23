import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { PatientsService } from '../../../core/services/petients-service/patients.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { selectPatients } from '../selectors/patients.selectors';
import { retrievedPatientsList } from '../actions/patients.actions';
import { IPatient } from '../../../core/interfaces/patient.interface';

@Component({
    selector: 'st-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent implements OnInit, OnDestroy {

    displayedColumns: Array<string> = ['fullName', 'middleName', 'lastName', 'age', 'favorites'];

    private _ngUnsubscribe = new Subject();

    patients$ = this.store.select(selectPatients);
    routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

    constructor(private store: Store<{patients: Array<IPatient>}>,
                private patientsService: PatientsService) {
    }

    ngOnInit() {
    }

    getPatientsList(): void {
        this.patientsService.getPatientsList()
            .pipe(
                takeUntil(this._ngUnsubscribe),
            )
            .subscribe(patients => this.store.dispatch(retrievedPatientsList({patients})));
    }

    ngOnDestroy(): void {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
