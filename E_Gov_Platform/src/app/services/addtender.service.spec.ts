import { TestBed } from '@angular/core/testing';

import { AddtenderService } from './addtender.service';

describe('AddtenderService', () => {
  let service: AddtenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
