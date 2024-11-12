import { TestBed } from '@angular/core/testing';

import { ShowdocumentsService } from './showdocuments.service';

describe('ShowdocumentsService', () => {
  let service: ShowdocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowdocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
