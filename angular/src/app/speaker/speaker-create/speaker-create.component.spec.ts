import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerCreateComponent } from './speaker-create.component';

describe('SpeakerCreateComponent', () => {
  let component: SpeakerCreateComponent;
  let fixture: ComponentFixture<SpeakerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
