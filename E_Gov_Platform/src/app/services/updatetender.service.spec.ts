import { TestBed } from '@angular/core/testing';

import { UpdatetenderService } from './updatetender.service';

describe('UpdatetenderService', () => {
  let service: UpdatetenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatetenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
