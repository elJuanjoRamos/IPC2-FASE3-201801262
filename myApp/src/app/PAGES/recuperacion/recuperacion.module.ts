import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecuperacionPage } from './recuperacion.page';
import { UsuarioService } from '../../services/usuario.service';

const routes: Routes = [
  {
    path: '',
    component: RecuperacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [UsuarioService],
  declarations: [RecuperacionPage]
})
export class RecuperacionPageModule {}
