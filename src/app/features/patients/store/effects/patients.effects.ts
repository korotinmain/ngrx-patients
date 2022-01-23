import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PatientsService } from '../../../../core/services/petients-service/patients.service';
import { getPatients, getPatientsFailed, getPatientsSuccess } from '../actions/patients.actions';

@Injectable({providedIn: 'root'})
export class PatientsEffects {

    constructor(private actions$: Actions,
                private patientsService: PatientsService) {
    }

    loadPatients$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getPatients),
            mergeMap(() =>
                this.patientsService.getPatientsList()
                    .pipe(
                        map(patients => getPatientsSuccess({patients})),
                        catchError(error => [getPatientsFailed(error)]),
                    ),
            ),
        ),
    )
}
