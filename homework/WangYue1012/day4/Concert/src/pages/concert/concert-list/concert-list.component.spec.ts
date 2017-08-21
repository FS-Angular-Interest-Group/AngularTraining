import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertListComponent } from './concert-list.component';

describe('ConcertListComponent', () => {
  let component: ConcertListComponent;
  let fixture: ComponentFixture<ConcertListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
