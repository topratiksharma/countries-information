import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountryDetailsComponent } from '../country-details/country-details.component';
import { Country, CountryDetails } from '../shared/types';

@Component({
  selector: 'ci-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() public details!: Country;

  constructor(public materialDialog: MatDialog) {}

  public ngOnInit(): void {}

  public viewDetails(details: Country) {
    const countryInfo: CountryDetails = {
      name: details.name.common,
      officialName: details.name.official,
      capital: details.capital[0],
      flag: details.flags.png,
      currency: Object.values(details.currencies).map((c: any) => c)[0],
      languages: Object.values(details.languages)
        .map((l) => l)
        .join(', '),
    };
    this.materialDialog.open(CountryDetailsComponent, { data: countryInfo });
  }
}
