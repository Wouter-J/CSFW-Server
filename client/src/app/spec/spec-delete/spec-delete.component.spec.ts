import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecDeleteComponent } from './spec-delete.component';

describe('SpecDeleteComponent', () => {
  let component: SpecDeleteComponent;
  let fixture: ComponentFixture<SpecDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
