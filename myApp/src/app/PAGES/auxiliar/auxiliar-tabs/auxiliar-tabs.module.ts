import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuxiliarTabsPageRoutingModule } from './auxiliar-tabs-routing.module';

import { AuxiliarTabsPage } from './auxiliar-tabs.page';
import { AuxiliarHomePageModule } from '../auxiliar-home/auxiliar-home.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AuxiliarTabsPageRoutingModule,
    AuxiliarHomePageModule
  ],
  declarations: [AuxiliarTabsPage]
})
export class AuxiliarTabsPageModule {}
