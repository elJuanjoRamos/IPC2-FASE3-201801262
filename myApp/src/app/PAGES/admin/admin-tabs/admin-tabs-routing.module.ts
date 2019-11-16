import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePage } from '../admin-home/admin-home.page';
import { AdminTabsPage } from './admin-tabs.page';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminTabsPage,
    children: [
      {
        path: 'admin-home',
        children: [
          {
            //admin -- llega aqui y luego , aca, se supone, me captas?
            //simon va dejame ver
            path: '',
            loadChildren: () =>
              import('../admin-home/admin-home.module').then(m => m.AdminHomePageModule)
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
        redirectTo: '/view/admin-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/view/admin-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTabsPageRoutingModule {}
