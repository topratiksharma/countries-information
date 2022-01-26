import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpWrapperService } from '../http-wrapper/http-wrapper.service';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpWrapper: HttpWrapperService) {}

  public getAllCountries(): Observable<Array<any>> {
    return this.httpWrapper.get('all/') as Observable<Array<any>>;
  }
}
