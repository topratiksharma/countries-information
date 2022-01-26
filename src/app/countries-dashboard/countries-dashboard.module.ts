import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesDashboardComponent } from './countries-dashboard.component';
import { CountryRouting } from './countries-dashboard.routing';
import { CountryCardComponent } from '../country-card/country-card.component';
import { MaterialModule } from '../core/material.module';

@NgModule({
  declarations: [CountriesDashboardComponent, CountryCardComponent],
  imports: [CommonModule, CountryRouting,

    MaterialModule],
})
export class CountriesDashboardModule {}
