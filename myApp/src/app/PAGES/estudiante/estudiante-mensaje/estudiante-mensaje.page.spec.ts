import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteMensajePage } from './estudiante-mensaje.page';

describe('EstudianteMensajePage', () => {
  let component: EstudianteMensajePage;
  let fixture: ComponentFixture<EstudianteMensajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteMensajePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteMensajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
