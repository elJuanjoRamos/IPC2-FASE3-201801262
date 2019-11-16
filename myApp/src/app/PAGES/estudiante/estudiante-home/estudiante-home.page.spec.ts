import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteHomePage } from './estudiante-home.page';

describe('EstudianteHomePage', () => {
  let component: EstudianteHomePage;
  let fixture: ComponentFixture<EstudianteHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
