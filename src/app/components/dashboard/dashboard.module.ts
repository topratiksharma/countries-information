import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CountriesDashboardModule } from "../countries-dashboard/countries-dashboard.module";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../shared/navbar/shared.module";
import { DashboardRoutingModule } from "./dashboard.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    CountriesDashboardModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
