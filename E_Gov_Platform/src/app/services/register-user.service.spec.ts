import { TestBed } from '@angular/core/testing';

import { RegisterUserService } from '../services/register-user.service';

describe('RegisterUserService', () => {
  let service: RegisterUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
