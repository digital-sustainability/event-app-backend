import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationDetailComponent } from './presentation-detail.component';

describe('PresentationDetailComponent', () => {
  let component: PresentationDetailComponent;
  let fixture: ComponentFixture<PresentationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
