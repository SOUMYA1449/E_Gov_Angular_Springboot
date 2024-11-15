import { TestBed } from '@angular/core/testing';

import { ApplyTendersService } from './apply-tenders.service';

describe('ApplyTendersService', () => {
  let service: ApplyTendersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyTendersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
