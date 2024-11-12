import { TestBed } from '@angular/core/testing';

import { SchoSchemesService } from './scho-schemes.service';

describe('SchoSchemesService', () => {
  let service: SchoSchemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoSchemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
