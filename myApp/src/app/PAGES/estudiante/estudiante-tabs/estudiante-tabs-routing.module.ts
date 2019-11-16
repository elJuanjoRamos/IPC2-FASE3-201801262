import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteHomePage } from '../estudiante-home/estudiante-home.page';
import { EstudianteTabsPage } from './estudiante-tabs.page';

const routes: Routes = [
  {
    path: 'dashboard',
    component: EstudianteTabsPage,
    children: [
      {
        path: 'estudiante-home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../estudiante-home/estudiante-home.module').then(m => m.EstudianteHomePageModule)
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
        redirectTo: '/view/estudiante-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/view/estudiante-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteTabsPageRoutingModule {}
