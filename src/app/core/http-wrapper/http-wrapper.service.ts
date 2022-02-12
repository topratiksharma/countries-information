import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class HttpWrapperService {
  constructor(private httpClient: HttpClient) {}

  public get(url: string) {
    return this.httpClient.get(this.getUrl(url));
  }

  private getUrl(uri: string) {
    return API_BASE + uri;
  }
}

const API_BASE = 'https://restcountries.com/v3.1/';
