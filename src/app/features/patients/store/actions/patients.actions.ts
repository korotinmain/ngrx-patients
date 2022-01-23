import { createAction, props } from '@ngrx/store';
import { IPatient } from '../../../../core/interfaces/patient.interface';

// Get patients
export const getPatients = createAction('[Patients list] Get patients');
export const getPatientsSuccess = createAction('[Patients list] Get patients success', props<{ patients: Array<IPatient> }>());
export const getPatientsFailed = createAction('[Patients list] Get patients failed', (error: Error) => ({error}));
