import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuxiliarCursosPage } from './auxiliar-cursos.page';
import { AsignacionAuxiliarService } from '../../../services/asignacionAuxiliar.service';
import { ModalDetalleAuxComponent } from './modal-detalle-aux/modal-detalle-aux.component';
import { ActividadService } from '../../../services/actividad.service';
import { ModalEstudianteComponent } from './modal-estudiantes/modal-estudiante.component';

const routes: Routes = [
  {
    path: '',
    component: AuxiliarCursosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ], providers: [AsignacionAuxiliarService, ActividadService],
  declarations: [AuxiliarCursosPage, ModalDetalleAuxComponent, ModalEstudianteComponent],
   entryComponents: [ModalDetalleAuxComponent, ModalEstudianteComponent]
})
export class AuxiliarCursosPageModule {}
