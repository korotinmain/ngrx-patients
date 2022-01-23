import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPatient } from '../../../../core/interfaces/patient.interface';
import { getPatients } from '../actions/patients.actions';
import { getPatientsList } from '../selectors';

@Injectable()
export class PatientsFacade {

    patients$: Observable<Array<IPatient>> = this.store.pipe(select(getPatientsList))

    constructor(private store: Store) {
    }

    get(): void {
        this.store.dispatch(getPatients());
    }
}
