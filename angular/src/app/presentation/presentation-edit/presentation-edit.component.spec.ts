import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationEditComponent } from './presentation-edit.component';

describe('PresentationEditComponent', () => {
  let component: PresentationEditComponent;
  let fixture: ComponentFixture<PresentationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
