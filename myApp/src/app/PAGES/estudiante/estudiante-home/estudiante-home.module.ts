import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstudianteHomePage } from './estudiante-home.page';
import { ModalCalificacionComponent } from './modal-calificacion/modal-calificacion.component';
import { ActividadService } from '../../../services/actividad.service';
import { TipoEvaluacionService } from '../../../services/tipoEvaluacion.service';
import { UsuarioService } from '../../../services/usuario.service';

const routes: Routes = [
  {
    path: '',
    component: EstudianteHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ], providers: [
    TipoEvaluacionService,
    ActividadService,
    UsuarioService
  ],
  declarations: [EstudianteHomePage, ModalCalificacionComponent],
  entryComponents:[ModalCalificacionComponent]
})
export class EstudianteHomePageModule {}
