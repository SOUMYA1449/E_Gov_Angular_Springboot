import { TestBed } from '@angular/core/testing';

import { ShowapplytenderService } from './showapplytender.service';

describe('ShowapplytenderService', () => {
  let service: ShowapplytenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowapplytenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
