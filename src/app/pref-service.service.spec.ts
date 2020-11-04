import { TestBed } from '@angular/core/testing';

import { PrefServiceService } from './pref-service.service';

describe('PrefServiceService', () => {
  let service: PrefServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
