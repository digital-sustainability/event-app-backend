import { TestBed, async, inject } from '@angular/core/testing';

import { OnlyLoggedInGuard } from './only-logged-in.guard';

describe('OnlyLoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyLoggedInGuard]
    });
  });

  it('should ...', inject([OnlyLoggedInGuard], (guard: OnlyLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
