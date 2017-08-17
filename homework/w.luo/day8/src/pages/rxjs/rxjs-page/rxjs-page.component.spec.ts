import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPageComponent } from './rxjs-page.component';

describe('RxjsPageComponent', () => {
  let component: RxjsPageComponent;
  let fixture: ComponentFixture<RxjsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
