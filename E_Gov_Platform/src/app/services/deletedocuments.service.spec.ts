import { TestBed } from '@angular/core/testing';

import { DeletedocumentsService } from './deletedocuments.service';

describe('DeletedocumentsService', () => {
  let service: DeletedocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletedocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
