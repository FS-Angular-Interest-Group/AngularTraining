import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerChildrenComponent } from './timer-children.component';

describe('TimerChildrenComponent', () => {
  let component: TimerChildrenComponent;
  let fixture: ComponentFixture<TimerChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
