import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'countries' },
  {
    path: 'countries',
    loadChildren: () =>
      import('./components/countries-dashboard/countries-dashboard.module').then((m) => m.CountriesDashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
