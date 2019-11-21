import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuxiliarPostPage } from './auxiliar-post.page';
import { ModalPostComponent } from './modal-post/modal-post.component';
import { UsuarioService } from '../../../services/usuario.service';
import { ModalEditarPostComponent } from './modal-post/modal-editar-post.component';

const routes: Routes = [
  {
    path: '',
    component: AuxiliarPostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ], providers: [UsuarioService],
  declarations: [AuxiliarPostPage,
      ModalPostComponent,
      ModalEditarPostComponent],
  entryComponents: [ModalPostComponent, ModalEditarPostComponent]
})
export class AuxiliarPostPageModule {}
