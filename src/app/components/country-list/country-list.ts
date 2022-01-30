import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/countries/countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.html',
  styleUrls: ['./country-list.scss'],
})
export class CountryListComponent implements OnInit {
  public countryList: any[] = [];
  public isloading: boolean = true;

  @Input() public searchText = '';

  constructor(
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((countries: any[]) => {
      this.countryList = countries;
      this.isloading = false;
    });
  }
}
