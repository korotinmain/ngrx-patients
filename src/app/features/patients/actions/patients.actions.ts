import { createAction, props } from '@ngrx/store';
import { IPatient } from '../../../core/interfaces/patient.interface';

export const retrievedPatientsList = createAction(
    '[Patients List/API] Retrieve Orders Success',
    props<{ patients: ReadonlyArray<IPatient> }>(),
);
