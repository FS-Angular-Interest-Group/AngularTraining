import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertEditComponent} from './concert-edit.component';

describe('ConcertEditComponent', () => {
  let component: ConcertEditComponent;
  let fixture: ComponentFixture<ConcertEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
