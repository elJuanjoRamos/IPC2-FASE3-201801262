import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuxiliarHomePage } from '../auxiliar-home/auxiliar-home.page';
import { AuxiliarTabsPage } from './auxiliar-tabs.page';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AuxiliarTabsPage,
    children: [
      {
        path: 'auxiliar-home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../auxiliar-home/auxiliar-home.module').then(m => m.AuxiliarHomePageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            /*path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)*/
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            /*path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)*/
          }
        ]
      },
      {
        path: '',
        redirectTo: '/view/auxiliar-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/view/auxiliar-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuxiliarTabsPageRoutingModule {}
