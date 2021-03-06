
import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/countries/countries.service';
import { fadeAnimation } from '../shared/animation/fade.animation';
import { Country } from '../shared/types';

@Component({
  selector: 'ci-country-list',
  templateUrl: './country-list.html',
  styleUrls: ['./country-list.scss'],
  animations: [fadeAnimation],
})
export class CountryListComponent implements OnInit {
  public countryList: Country[] = [];
  public isloading: boolean = true;

  @Input() public searchText = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService
      .getAllCountries()
      .subscribe((countries: Country[]) => {
        this.countryList = countries;
        this.isloading = false;
      });
  }
}
