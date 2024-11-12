import { TestBed } from '@angular/core/testing';

import { UpdatestatusdschemeService } from './updatestatusdscheme.service';

describe('UpdatestatusdschemeService', () => {
  let service: UpdatestatusdschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatestatusdschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
