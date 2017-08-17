import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerFatherComponent } from './timer-father.component';

describe('TimerFatherComponent', () => {
  let component: TimerFatherComponent;
  let fixture: ComponentFixture<TimerFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
