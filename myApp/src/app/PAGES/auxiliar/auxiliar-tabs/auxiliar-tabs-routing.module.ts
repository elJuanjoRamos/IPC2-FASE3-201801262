import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuxiliarHomePage } from '../auxiliar-home/auxiliar-home.page';
import { AuxiliarTabsPage } from './auxiliar-tabs.page';
import { AuxiliarPostPage } from '../auxiliar-post/auxiliar-post.page';

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
        path: 'auxiliar-cursos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../auxiliar-cursos/auxiliar-cursos.module').then(m => m.AuxiliarCursosPageModule)
          }
        ]
      },
      {
        path: 'auxiliar-post',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../auxiliar-post/auxiliar-post.module').then(m => m.AuxiliarPostPageModule)
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
