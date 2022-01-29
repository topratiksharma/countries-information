import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesDashboardComponent } from './countries-dashboard.component';
import { CountryRouting } from './countries-dashboard.routing';
import { CountryCardComponent } from '../country-card/country-card.component';
import { MaterialModule } from '../core/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CountriesDashboardComponent, CountryCardComponent],
  imports: [CommonModule, CountryRouting, SharedModule, MaterialModule, ReactiveFormsModule, FormsModule],
})
export class CountriesDashboardModule {}
