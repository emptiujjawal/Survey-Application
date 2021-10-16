import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveydashboardComponent } from './surveydashboard.component';

describe('SurveydashboardComponent', () => {
  let component: SurveydashboardComponent;
  let fixture: ComponentFixture<SurveydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
