import { TestBed } from '@angular/core/testing';

import { AddSchemeService } from './add-scheme.service';

describe('AddSchemeService', () => {
  let service: AddSchemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSchemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
