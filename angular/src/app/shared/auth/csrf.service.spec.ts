import { TestBed, inject } from '@angular/core/testing';

import { CsrfService } from './csrf.service';

describe('CsrfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsrfService]
    });
  });

  it('should be created', inject([CsrfService], (service: CsrfService) => {
    expect(service).toBeTruthy();
  }));
});
