import { TestBed } from '@angular/core/testing';

import { AddnoticesService } from './addnotices.service';

describe('AddnoticesService', () => {
  let service: AddnoticesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnoticesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
