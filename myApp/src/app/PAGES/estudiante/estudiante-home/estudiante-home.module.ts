import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstudianteHomePage } from './estudiante-home.page';

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
  ],
  declarations: [EstudianteHomePage]
})
export class EstudianteHomePageModule {}
