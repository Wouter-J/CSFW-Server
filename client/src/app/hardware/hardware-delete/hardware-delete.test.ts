import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareDeleteComponent } from './hardware-delete.component';

describe('HardwareDeleteComponent', () => {
  let component: HardwareDeleteComponent;
  let fixture: ComponentFixture<HardwareDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareDeleteComponent);
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
});
