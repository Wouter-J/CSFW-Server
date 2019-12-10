import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // new test by ngentest
  it('should run #ngOnInit()', async () => {
    component.formBuilder = component.formBuilder || {};
    component.formBuilder.group = jest.fn();
    component.route = component.route || {};
    component.route.snapshot = {
      queryParams: {
        'returnUrl': {}
      }
    };
    component.ngOnInit();
    // expect(component.formBuilder.group).toHaveBeenCalled();
  });
    
  // new test by ngentest
  it('should run #onSubmit()', async () => {
    component.loginForm = component.loginForm || {};
    component.loginForm.invalid = 'invalid';
    component.authenticationService = component.authenticationService || {};
    component.authenticationService.login = jest.fn().mockReturnValue(observableOf({}));
    component.f = component.f || {};
    component.f.username = {
      value: {}
    };
    component.f.password = {
      value: {}
    };
    component.router = component.router || {};
    component.router.navigate = jest.fn();
    component.onSubmit();
    // expect(component.authenticationService.login).toHaveBeenCalled();
    // expect(component.router.navigate).toHaveBeenCalled();
  });
});
