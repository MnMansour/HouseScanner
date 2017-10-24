import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupmobileComponent } from './signupmobile.component';

describe('SignupmobileComponent', () => {
  let component: SignupmobileComponent;
  let fixture: ComponentFixture<SignupmobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupmobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
