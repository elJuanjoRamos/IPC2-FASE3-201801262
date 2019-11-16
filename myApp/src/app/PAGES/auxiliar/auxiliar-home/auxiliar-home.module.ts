import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuxiliarHomePage } from './auxiliar-home.page';

const routes: Routes = [
  {
    path: '',
    component: AuxiliarHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuxiliarHomePage]
})
export class AuxiliarHomePageModule {}
