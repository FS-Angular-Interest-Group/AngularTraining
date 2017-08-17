import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SIFComponent } from './sif.component';

describe('SIFComponent', () => {
  let component: SIFComponent;
  let fixture: ComponentFixture<SIFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SIFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
