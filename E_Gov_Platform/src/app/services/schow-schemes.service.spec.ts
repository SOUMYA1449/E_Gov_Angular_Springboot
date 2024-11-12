import { TestBed } from '@angular/core/testing';

import { SchowSchemesService } from './schow-schemes.service';

describe('SchowSchemesService', () => {
  let service: SchowSchemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchowSchemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
