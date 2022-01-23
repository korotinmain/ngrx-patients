import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { patientsFeatureName, patientsReducerMap } from './store/reducers';
import { PatientsFacade } from './store/facades/patients.facade';
import { PatientsEffects } from './store/effects/patients.effects';

@NgModule({
    declarations: [PatientsComponent],
    imports: [
        CommonModule,
        SharedModule,
        PatientsRoutingModule,
        MatTableModule,
        StoreModule.forFeature(patientsFeatureName, patientsReducerMap),
        EffectsModule.forFeature([PatientsEffects]),
    ],
    providers: [PatientsFacade],
})
export class PatientsModule {
}
