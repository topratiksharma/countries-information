import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesDashboardComponent } from './countries-dashboard.component';
import { OverviewRouting } from './countries-dashboard.routing';

@NgModule({
  declarations: [CountriesDashboardComponent],
  imports: [CommonModule, OverviewRouting],
})
export class CountriesDashboardModule {}
