import { TestBed } from '@angular/core/testing';

import { DeleteappliedschemeService } from './deleteappliedscheme.service';

describe('DeleteappliedschemeService', () => {
  let service: DeleteappliedschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteappliedschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
