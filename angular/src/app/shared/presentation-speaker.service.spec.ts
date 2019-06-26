import { TestBed } from '@angular/core/testing';

import { PresentationSpeakerService } from './presentation-speaker.service';

describe('PresentationSpeakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresentationSpeakerService = TestBed.get(PresentationSpeakerService);
    expect(service).toBeTruthy();
  });
});
