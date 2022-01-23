import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Observable } from 'rxjs';
import { IPatient } from '../../../core/interfaces/patient.interface';
import { PatientsFacade } from '../store/facades/patients.facade';
import { DISPLAYED_COLUMNS } from '../../../core/constants/displayed-columns.constants';

@Component({
    selector: 'st-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent implements OnInit {

    displayedColumns: Array<string> = DISPLAYED_COLUMNS.PATIENTS;

    patients$: Observable<Array<IPatient>> = this.patientsListFacade.patients$;
    routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

    constructor(private patientsListFacade: PatientsFacade) {
    }

    ngOnInit() {
    }

    getPatientsList(): void {
        this.patientsListFacade.get();
    }

    changeFavoritePatientState(patient: IPatient, state: boolean): void {
        const editedPatient = {...patient, isFavorite: state};
        this.patientsListFacade.edit(editedPatient);
    }
}
