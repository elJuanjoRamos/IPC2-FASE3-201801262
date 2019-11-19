import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstudianteCursosPage } from './estudiante-cursos.page';
import { AsignacionAuxiliarService } from '../../../services/asignacionAuxiliar.service';
import { ModalDetalleComponent } from './modal-detalle/modal-detalle.component';
import { EvaluacionService } from '../../../services/evaluaion.service';
import { ActividadService } from '../../../services/actividad.service';
import { CursoService } from '../../../services/curso.service';
import { AsignacionEstudianteService } from '../../../services/asignacionEstudiante.service';
import { ModalAsignacionComponent } from './modal-asignacion/modal-asignacion.component';
import { TipoEvaluacionService } from '../../../services/tipoEvaluacion.service';



const routes: Routes = [
  {
    path: '',
    component: EstudianteCursosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ], providers: [
    AsignacionAuxiliarService,
    EvaluacionService,
    CursoService,
    ActividadService,
    AsignacionEstudianteService,
    TipoEvaluacionService
  ],
  declarations: [
    EstudianteCursosPage,
    ModalDetalleComponent,
    ModalAsignacionComponent
  ], entryComponents: [
    ModalDetalleComponent,
    ModalAsignacionComponent
  ]
})
export class EstudianteCursosPageModule {}
