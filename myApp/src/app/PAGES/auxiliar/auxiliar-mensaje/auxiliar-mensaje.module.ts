import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuxiliarMensajePage } from './auxiliar-mensaje.page';
import { MensajeService } from '../../../services/mensaje.service';
import { UsuarioService } from '../../../services/usuario.service';
import { ModalMensajeAuxComponent } from './modal-mensaje-aux/modal-mensaje-aux.component';
const routes: Routes = [
  {
    path: '',
    component: AuxiliarMensajePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ], providers: [MensajeService, UsuarioService],
  declarations: [AuxiliarMensajePage, ModalMensajeAuxComponent], entryComponents: [ModalMensajeAuxComponent]
})
export class AuxiliarMensajePageModule {}
