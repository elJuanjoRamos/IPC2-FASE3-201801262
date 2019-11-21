import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { EstudiantePostPage } from './estudiante-post.page';
import { UsuarioService } from '../../../services/usuario.service';

const routes: Routes = [
  {
    path: '',
    component: EstudiantePostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ], providers: [UsuarioService],
  declarations: [EstudiantePostPage]
})
export class EstudiantePostPageModule {}
