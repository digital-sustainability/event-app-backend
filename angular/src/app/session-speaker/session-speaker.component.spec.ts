import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionSpeakerComponent } from './session-speaker.component';

describe('SessionSpeakerComponent', () => {
  let component: SessionSpeakerComponent;
  let fixture: ComponentFixture<SessionSpeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionSpeakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
