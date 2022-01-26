import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../core/countries/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries-dashboard.component.html',
  styleUrls: ['./countries-dashboard.component.scss'],
})
export class CountriesDashboardComponent implements OnInit {
  public countryList: Array<any> = [];
  isloading: boolean=true;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((countries: any[]) => {
        this.countryList = countries;
        this.isloading = false;
      });
  }
}
