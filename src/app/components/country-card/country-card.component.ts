import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountriesService } from 'src/app/core/countries/countries.service';
import { CountryDetailsComponent } from '../country-details/country-details.component';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() public details: any;

  constructor(public materialDialog: MatDialog) {}

  public ngOnInit(): void {}

  public viewDetails(details: any) {
    const countryInfo = {
      name: details.name.common,
      officailName: details.name.official,
      capital: details.capital[0],
      flag: details.flags.png,
      currency: Object.values(details.currencies).map((c: any) => c)[0],
      languages: Object.values(details.languages)
        .map((l) => l)
        .join(', '),
    };
    this.materialDialog.open(CountryDetailsComponent, {
      // width: '40%',
      data: countryInfo,
    });
  }
}
