import { IPatientsListState } from '../reducers/patients.reducer';

export const patientsListSelect = (state: IPatientsListState) => state.patients;
export const patientsListLoaded = (state: IPatientsListState) => state.isLoaded;
