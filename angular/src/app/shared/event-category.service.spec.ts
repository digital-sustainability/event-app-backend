import { TestBed } from '@angular/core/testing';

import { EventCategoryService } from './event-category.service';

describe('EventCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventCategoryService = TestBed.get(EventCategoryService);
    expect(service).toBeTruthy();
  });
});
