import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CountryListComponent } from "./country-list";
import { CountryCardComponent } from "../country-card/country-card.component";

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, NgbModule],
  declarations: [CountryListComponent, CountryCardComponent],
  exports: [CountryListComponent],
})
export class CountriesDashboardModule {}
