import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../core/countries/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries-dashboard.component.html',
  styleUrls: ['./countries-dashboard.component.scss'],
})
export class CountriesDashboardComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((counties) => {
      console.log(counties);
    });
  }
}
