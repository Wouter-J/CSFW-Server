import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecEditComponent } from './spec-edit.component';

describe('SpecEditComponent', () => {
  let component: SpecEditComponent;
  let fixture: ComponentFixture<SpecEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
