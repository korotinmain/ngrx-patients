import { createReducer, on } from '@ngrx/store';
import { IPatient } from '../../../core/interfaces/patient.interface';
import { retrievedPatientsList } from '../actions/patients.actions';

export const initialState: ReadonlyArray<IPatient> = [];

export const patientsReducer = createReducer(
    initialState,
    on(retrievedPatientsList, (state, { patients }) => patients)
);
