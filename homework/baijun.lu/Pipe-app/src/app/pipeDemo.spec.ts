import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { myPipeDemo } from './pipeDemo';

describe('myPipeDemo', () => {
  let component: myPipeDemo;
  let fixture: ComponentFixture<myPipeDemo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ myPipeDemo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(myPipeDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
