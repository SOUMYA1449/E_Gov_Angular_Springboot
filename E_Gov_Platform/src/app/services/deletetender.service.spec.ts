import { TestBed } from '@angular/core/testing';

import { DeletetenderService } from './deletetender.service';

describe('DeletetenderService', () => {
  let service: DeletetenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletetenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
