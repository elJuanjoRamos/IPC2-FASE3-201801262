import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstudianteMensajePage } from './estudiante-mensaje.page';

const routes: Routes = [
  {
    path: '',
    component: EstudianteMensajePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstudianteMensajePage]
})
export class EstudianteMensajePageModule {}
