import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountriesService } from 'src/app/core/countries/countries.service';
import { CountryDetailsComponent } from '../country-details/country-details.component';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() public details: any;

  constructor(
    private _modalService: NgbModal,
    private countryService: CountriesService
  ) {}

  public ngOnInit(): void {}

  public viewDetails(details: any) {
    this.countryService.setData(details);
    this._modalService.open(CountryDetailsComponent);
  }
}
