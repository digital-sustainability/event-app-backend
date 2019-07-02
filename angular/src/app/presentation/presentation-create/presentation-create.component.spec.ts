import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationCreateComponent } from './presentation-create.component';

describe('PresentationCreateComponent', () => {
  let component: PresentationCreateComponent;
  let fixture: ComponentFixture<PresentationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
