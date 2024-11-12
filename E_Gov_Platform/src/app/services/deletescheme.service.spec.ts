import { TestBed } from '@angular/core/testing';

import { DeleteschemeService } from './deletescheme.service';

describe('DeleteschemeService', () => {
  let service: DeleteschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
