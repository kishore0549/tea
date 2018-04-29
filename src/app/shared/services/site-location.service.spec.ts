import { TestBed, inject } from '@angular/core/testing';

import { SiteLocationService } from './site-location.service';

describe('SiteLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteLocationService]
    });
  });

  it('should be created', inject([SiteLocationService], (service: SiteLocationService) => {
    expect(service).toBeTruthy();
  }));
});
