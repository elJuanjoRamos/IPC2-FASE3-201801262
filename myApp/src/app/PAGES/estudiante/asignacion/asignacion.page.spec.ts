import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionPage } from './asignacion.page';

describe('AsignacionPage', () => {
  let component: AsignacionPage;
  let fixture: ComponentFixture<AsignacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
