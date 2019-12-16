import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareCreateComponent } from './hardware-create.component';

describe('HardwareCreateComponent', () => {
  let component: HardwareCreateComponent;
  let fixture: ComponentFixture<HardwareCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // new test by ngentest
  it('should run GetterDeclaration #myForm', async () => {
    component.hardwareForm = component.hardwareForm || {};
    component.hardwareForm.controls = 'controls';
    const myForm = component.myForm;
    
  });
    
  // new test by ngentest
  it('should run #ngOnInit()', async () => {
    
    component.ngOnInit();
    
  });
    
  // new test by ngentest
  it('should run #mainForm()', async () => {
    component.fb = component.fb || {};
    component.fb.group = jest.fn();
    component.mainForm();
    // expect(component.fb.group).toHaveBeenCalled();
  });
    
  // new test by ngentest
  it('should run #onSubmit()', async () => {
    component.HardwareApiService = component.HardwareApiService || {};
    component.HardwareApiService.createHardware = jest.fn().mockReturnValue(observableOf({}));
    component.hardwareForm = component.hardwareForm || {};
    component.hardwareForm.value = 'value';
    component.onSubmit();
    // expect(component.HardwareApiService.createHardware).toHaveBeenCalled();
  });
});
