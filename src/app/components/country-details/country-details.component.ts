import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryDetails } from '../shared/types';

@Component({
  selector: 'ci-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent {
  public country: CountryDetails;
  constructor(
    public dialogRef: MatDialogRef<CountryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CountryDetails
  ) {
    this.country = this.data;
  }
}
