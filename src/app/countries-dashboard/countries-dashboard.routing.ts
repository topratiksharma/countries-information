import { RouterModule, Routes } from '@angular/router';
import { CountriesDashboardComponent } from './countries-dashboard.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: CountriesDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRouting {}
