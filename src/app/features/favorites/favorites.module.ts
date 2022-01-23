import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { PatientsFacade } from '../patients/store/facades/patients.facade';
import { OrdersFacade } from '../orders/store/facades/orders.facade';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, SharedModule, FavoritesRoutingModule, MatTableModule],
  providers: [PatientsFacade, OrdersFacade],
})
export class FavoritesModule {}
