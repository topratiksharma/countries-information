import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/countries/countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.html',
})
export class CountryListComponent implements OnInit {
  public countryList: any[] = [];
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((countries: any[]) => {
      this.countryList = countries;
    });
  }
}
