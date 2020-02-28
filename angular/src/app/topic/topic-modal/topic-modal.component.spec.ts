import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicModalComponent } from './topic-modal.component';

describe('TopicModalComponent', () => {
  let component: TopicModalComponent;
  let fixture: ComponentFixture<TopicModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
