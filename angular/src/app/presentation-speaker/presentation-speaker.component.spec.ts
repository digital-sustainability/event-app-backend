import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSpeakerComponent } from './presentation-speaker.component';

describe('PresentationSpeakerComponent', () => {
  let component: PresentationSpeakerComponent;
  let fixture: ComponentFixture<PresentationSpeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationSpeakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
