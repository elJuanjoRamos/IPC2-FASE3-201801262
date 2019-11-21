import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuxiliarEvaluacionPage } from './auxiliar-evaluacion.page';
import { EvaluacionService } from '../../../services/evaluaion.service';
import { AsignacionAuxiliarService } from '../../../services/asignacionAuxiliar.service';
import { ModalGestionComponent } from './modal-gestion/modal-gestion.component';
import { TipoEvaluacionService } from '../../../services/tipoEvaluacion.service';

const routes: Routes = [
  {
    path: '',
    component: AuxiliarEvaluacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ], providers: [EvaluacionService, AsignacionAuxiliarService, TipoEvaluacionService],
  declarations: [AuxiliarEvaluacionPage, ModalGestionComponent], entryComponents: [ModalGestionComponent]
})
export class AuxiliarEvaluacionPageModule {}
