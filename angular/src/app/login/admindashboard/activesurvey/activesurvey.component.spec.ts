import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivesurveyComponent } from './activesurvey.component';

describe('ActivesurveyComponent', () => {
  let component: ActivesurveyComponent;
  let fixture: ComponentFixture<ActivesurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivesurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivesurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
