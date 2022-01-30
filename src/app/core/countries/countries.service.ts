import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpWrapperService } from '../http-wrapper/http-wrapper.service';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public country: any = {};
  constructor(private httpWrapper: HttpWrapperService) {}

  public getAllCountries(): Observable<Array<any>> {
    return this.httpWrapper.get('all/') as Observable<Array<any>>;
  }

  public getData() {
    return {
      name: this.country.name.common,
      officialName: this.country.name.official,
      capital: this.country.capital[0],
      currency: Object.values(this.country.currencies).map((c: any) => c)[0],
      languages: Object.values(this.country.languages)
        .map((l) => l)
        .join(', '),
    };
  }
}
