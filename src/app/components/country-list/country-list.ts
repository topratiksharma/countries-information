import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/countries/countries.service';
import { Country } from '../shared/types';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.html',
  styleUrls: ['./country-list.scss'],
})
export class CountryListComponent implements OnInit {
  public countryList: Country[] = [];
  public isloading: boolean = true;

  @Input() public searchText = '';

  constructor(
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((countries: Country[]) => {
      this.countryList = countries;
      this.isloading = false;
    });
  }
}
