import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../core/countries/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries-dashboard.component.html',
  styleUrls: ['./countries-dashboard.component.scss'],
})
export class CountriesDashboardComponent implements OnInit {
  public countryList: Array<any> = [];
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((countries: any[]) => {
        this.countryList = countries;
        console.log(countries);
      });
  }
}
