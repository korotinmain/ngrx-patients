import { createFeatureSelector, createSelector } from '@ngrx/store';
import { patientsFeatureName } from '../reducers';
import { adapter, IPatientsListState } from '../reducers/patients.reducer';

const getPatientsModule = createFeatureSelector<IPatientsListState>(patientsFeatureName);

export const {
    selectEntities,
    selectAll,
    selectIds,
    selectTotal,
} = adapter.getSelectors(getPatientsModule);

export const getPatientsList = createSelector(
    getPatientsModule,
    selectAll,
)
