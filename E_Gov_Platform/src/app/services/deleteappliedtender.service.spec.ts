import { TestBed } from '@angular/core/testing';

import { DeleteappliedtenderService } from './deleteappliedtender.service';

describe('DeleteappliedtenderService', () => {
  let service: DeleteappliedtenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteappliedtenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
