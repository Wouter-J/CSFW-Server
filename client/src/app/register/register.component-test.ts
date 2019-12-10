import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
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
    component.registerForm = component.registerForm || {};
    component.registerForm.value = 'value';
    component.registerService = component.registerService || {};
    component.registerService.createUser = jest.fn().mockReturnValue(observableOf({}));
    component.onSubmit();
    // expect(component.registerService.createUser).toHaveBeenCalled();
  });
});
