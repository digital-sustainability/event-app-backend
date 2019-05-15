import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenationFormComponent } from './presenation-form.component';

describe('PresenationFormComponent', () => {
  let component: PresenationFormComponent;
  let fixture: ComponentFixture<PresenationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
