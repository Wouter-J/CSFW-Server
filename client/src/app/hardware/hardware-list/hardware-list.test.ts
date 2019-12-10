import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareListComponent } from './hardware-list.component';

describe('HardwareListComponent', () => {
  let component: HardwareListComponent;
  let fixture: ComponentFixture<HardwareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // new test by ngentest
  it('should run #ngOnInit()', async () => {
    
    component.ngOnInit();
    
  });
    
  // new test by ngentest
  it('should run #readHardware()', async () => {
    component.hardwareApiService = component.hardwareApiService || {};
    component.hardwareApiService.getHardwares = jest.fn().mockReturnValue(observableOf({}));
    component.readHardware();
    // expect(component.hardwareApiService.getHardwares).toHaveBeenCalled();
  });
    
  // new test by ngentest
  it('should run #removeHardware()', async () => {
    component.hardwareApiService = component.hardwareApiService || {};
    component.hardwareApiService.deleteHardware = jest.fn().mockReturnValue(observableOf({}));
    window.confirm = jest.fn();
    window.location.reload = jest.fn();
    component.removeHardware({
      _id: {}
    }, {});
    // expect(component.hardwareApiService.deleteHardware).toHaveBeenCalled();
    // expect(window.confirm).toHaveBeenCalled();
    // expect(window.location.reload).toHaveBeenCalled();
  });
});
