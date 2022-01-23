import { ActionReducerMap } from '@ngrx/store';
import { IPatientsListState, patientsReducer } from './patients.reducer';

export const patientsFeatureName = 'patientsList';

export interface IState {
    readonly patientsList: IPatientsListState,
}

export const patientsReducerMap: ActionReducerMap<IState> = {
    patientsList: patientsReducer,
}
