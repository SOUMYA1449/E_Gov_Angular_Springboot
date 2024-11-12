import { TestBed } from '@angular/core/testing';

import { ApplyschemeService } from './applyscheme.service';

describe('ApplyschemeService', () => {
  let service: ApplyschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
