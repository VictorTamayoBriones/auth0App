import { TestBed } from '@angular/core/testing';

import { GuardWardGuard } from './guard-ward.guard';

describe('GuardWardGuard', () => {
  let guard: GuardWardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardWardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
