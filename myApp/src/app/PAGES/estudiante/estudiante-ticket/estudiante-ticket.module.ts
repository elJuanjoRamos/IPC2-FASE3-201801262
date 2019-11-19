import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstudianteTicketPage } from './estudiante-ticket.page';
import { TicketService } from '../../../services/ticket.service';
import { ModalDetalleTicketComponent } from './modal-detalle-ticket/modal-detalle-ticket.component';
import { ModalCrearTicketComponent } from './modal-crear-ticket/modal-crear-ticket.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EstudianteTicketPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ], providers: [TicketService],
  declarations: [
    EstudianteTicketPage,
    ModalDetalleTicketComponent,
    ModalCrearTicketComponent,
  ],
  entryComponents: [
    ModalDetalleTicketComponent,
    ModalCrearTicketComponent
  ]
})
export class EstudianteTicketPageModule {}
