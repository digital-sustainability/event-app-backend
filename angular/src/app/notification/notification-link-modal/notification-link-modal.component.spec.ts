import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationLinkModalComponent } from './notification-link-modal.component';

describe('NotificationLinkModalComponent', () => {
  let component: NotificationLinkModalComponent;
  let fixture: ComponentFixture<NotificationLinkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationLinkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
