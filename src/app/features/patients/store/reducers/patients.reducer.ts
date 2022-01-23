import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IPatient } from '../../../../core/interfaces/patient.interface';
import { getPatientsSuccess } from '../actions/patients.actions';

export interface IPatientsListState extends EntityState<IPatient> {
    patients: Array<IPatient>;
    isLoaded?: boolean;
    errorMessage?: string;
}

export const adapter: EntityAdapter<IPatient> = createEntityAdapter<IPatient>({
    selectId: (patient) => patient.defaultId,
    sortComparer: false,
});

const initialState: IPatientsListState = adapter.getInitialState({
    patients: [],
});

export const reducer = createReducer(
    initialState,
    on(getPatientsSuccess, (state, {patients}) => adapter.addMany(patients, state)),
);

export function patientsReducer(state: IPatientsListState | null, action: Action) {
    return reducer(state, action);
}
