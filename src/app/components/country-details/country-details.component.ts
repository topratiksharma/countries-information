import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  public country: any;
  constructor(
    public dialogRef: MatDialogRef<CountryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.country = this.data;
  }

  ngOnInit(): void {}
}
