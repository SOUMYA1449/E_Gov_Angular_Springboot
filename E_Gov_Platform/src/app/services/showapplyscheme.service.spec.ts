import { TestBed } from '@angular/core/testing';

import { ShowapplyschemeService } from './showapplyscheme.service';

describe('ShowapplyschemeService', () => {
  let service: ShowapplyschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowapplyschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
