import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EstudianteTabsPageRoutingModule } from './estudiante-tabs-routing.module';

import { EstudianteTabsPage } from './estudiante-tabs.page';
import { EstudianteHomePageModule } from '../estudiante-home/estudiante-home.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EstudianteTabsPageRoutingModule,
    EstudianteHomePageModule
  ],
  declarations: [EstudianteTabsPage]
})
export class EstudianteTabsPageModule {}
