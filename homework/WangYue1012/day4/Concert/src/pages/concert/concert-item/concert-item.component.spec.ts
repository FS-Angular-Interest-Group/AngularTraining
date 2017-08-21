import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertItemComponent } from './concert-item.component';

describe('ConcertItemComponent', () => {
  let component: ConcertItemComponent;
  let fixture: ComponentFixture<ConcertItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
