import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecCreateComponent } from './spec-create.component';

describe('SpecCreateComponent', () => {
  let component: SpecCreateComponent;
  let fixture: ComponentFixture<SpecCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
