import { Injectable } from '@angular/core';
import {
  HttpWrapperService,
} from '../http-wrapper/http-wrapper.service';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpWrapper: HttpWrapperService) {}

  public getAllCountries() {
    return this.httpWrapper.get('all/');
  }
}
