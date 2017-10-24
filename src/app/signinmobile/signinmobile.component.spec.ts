import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninmobileComponent } from './signinmobile.component';

describe('SigninmobileComponent', () => {
  let component: SigninmobileComponent;
  let fixture: ComponentFixture<SigninmobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninmobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
