import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareEditComponent } from './hardware-edit.component';

describe('HardwareEditComponent', () => {
  let component: HardwareEditComponent;
  let fixture: ComponentFixture<HardwareEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // new test by ngentest
  it('should run GetterDeclaration #myForm', async () => {
    component.editForm = component.editForm || {};
    component.editForm.controls = 'controls';
    const myForm = component.myForm;
    
  });
    
  // new test by ngentest
  it('should run #ngOnInit()', async () => {
    component.updateHardware = jest.fn();
    component.actRoute = component.actRoute || {};
    component.actRoute.snapshot = {
      paramMap: {
        get: jest.fn()
      }
    };
    component.getHardware = jest.fn();
    component.fb = component.fb || {};
    component.fb.group = jest.fn();
    component.ngOnInit();
    // expect(component.updateHardware).toHaveBeenCalled();
    // expect(component.getHardware).toHaveBeenCalled();
    // expect(component.fb.group).toHaveBeenCalled();
  });
    
  // new test by ngentest
  it('should run #getHardware()', async () => {
    component.hardwareApiService = component.hardwareApiService || {};
    component.hardwareApiService.getHardware = jest.fn().mockReturnValue(observableOf({}));
    component.editForm = component.editForm || {};
    component.editForm.setValue = jest.fn();
    component.getHardware({});
    // expect(component.hardwareApiService.getHardware).toHaveBeenCalled();
    // expect(component.editForm.setValue).toHaveBeenCalled();
  });
    
  // new test by ngentest
  it('should run #updateHardware()', async () => {
    component.fb = component.fb || {};
    component.fb.group = jest.fn();
    component.updateHardware();
    // expect(component.fb.group).toHaveBeenCalled();
  });
    
  // new test by ngentest
  it('should run #onSubmit()', async () => {
    component.editForm = component.editForm || {};
    component.editForm.value = 'value';
    component.editForm.valid = 'valid';
    component.actRoute = component.actRoute || {};
    component.actRoute.snapshot = {
      paramMap: {
        get: jest.fn()
      }
    };
    component.hardwareApiService = component.hardwareApiService || {};
    component.hardwareApiService.updateHardware = jest.fn().mockReturnValue(observableOf({}));
    component.router = component.router || {};
    component.router.navigateByUrl = jest.fn();
    window.confirm = jest.fn();
    component.onSubmit();
    // expect(component.hardwareApiService.updateHardware).toHaveBeenCalled();
    // expect(component.router.navigateByUrl).toHaveBeenCalled();
    // expect(window.confirm).toHaveBeenCalled();
  });
});
