import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarHomePage } from './auxiliar-home.page';

describe('AuxiliarHomePage', () => {
  let component: AuxiliarHomePage;
  let fixture: ComponentFixture<AuxiliarHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxiliarHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliarHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
