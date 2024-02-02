import { TestBed } from '@angular/core/testing';

import { BeFormDetailsService } from './be-form-details.service';

describe('BeFormDetailsService', () => {
  let service: BeFormDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeFormDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
