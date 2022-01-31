import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpWrapperService } from './http-wrapper.service';

describe('HttpWrapperService', () => {
  let service: HttpWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[HttpClient]
    });
    service = TestBed.inject(HttpWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
