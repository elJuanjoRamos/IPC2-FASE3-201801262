import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminTabsPageRoutingModule } from './admin-tabs-routing.module';

import { AdminTabsPage } from './admin-tabs.page';
import { AdminHomePageModule } from '../admin-home/admin-home.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AdminTabsPageRoutingModule,
    AdminHomePageModule
  ],
  declarations: [AdminTabsPage]
})
export class AdminTabsPageModule {}
