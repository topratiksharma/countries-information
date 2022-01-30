import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryDetails } from '../shared/types';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  public country: CountryDetails;
  constructor(
    public dialogRef: MatDialogRef<CountryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CountryDetails
  ) {
    this.country = this.data;
  }

  ngOnInit(): void {}
}
