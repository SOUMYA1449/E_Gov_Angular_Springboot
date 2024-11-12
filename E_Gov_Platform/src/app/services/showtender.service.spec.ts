import { TestBed } from '@angular/core/testing';

import { ShowtenderService } from './showtender.service';

describe('ShowtenderService', () => {
  let service: ShowtenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowtenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
