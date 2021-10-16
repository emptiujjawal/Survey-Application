import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserresponseComponent } from './userresponse.component';

describe('UserresponseComponent', () => {
  let component: UserresponseComponent;
  let fixture: ComponentFixture<UserresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserresponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
