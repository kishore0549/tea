import { TestBed, inject } from '@angular/core/testing';

import { ChallansService } from './challans.service';

describe('ChallansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChallansService]
    });
  });

  it('should be created', inject([ChallansService], (service: ChallansService) => {
    expect(service).toBeTruthy();
  }));
});
