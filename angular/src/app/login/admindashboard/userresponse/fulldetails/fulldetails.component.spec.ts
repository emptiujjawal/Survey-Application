import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulldetailsComponent } from './fulldetails.component';

describe('FulldetailsComponent', () => {
  let component: FulldetailsComponent;
  let fixture: ComponentFixture<FulldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
