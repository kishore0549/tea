import { TestBed, inject } from '@angular/core/testing';

import { NewChallanService } from './new-challan.service';

describe('NewChallanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewChallanService]
    });
  });

  it('should be created', inject([NewChallanService], (service: NewChallanService) => {
    expect(service).toBeTruthy();
  }));
});
