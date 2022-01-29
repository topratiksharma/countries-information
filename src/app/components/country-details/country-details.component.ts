import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CountriesService } from "src/app/core/countries/countries.service";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.scss"],
})
export class CountryDetailsComponent implements OnInit {
  public country: any;
  constructor(
    public modal: NgbActiveModal,
    private countryService: CountriesService
  ) {
    this.country = this.countryService.getData();
  }

  ngOnInit(): void {}
}
