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
        path: 'estudiante-cursos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../estudiante-cursos/estudiante-cursos.module').then(m => m.EstudianteCursosPageModule)
          }
        ]
      },
      {
      path: 'estudiante-ticket',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../estudiante-ticket/estudiante-ticket.module').then(m => m.EstudianteTicketPageModule)
          }
        ]
      },
      {
        path: 'estudiante-post',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('../estudiante-post/estudiante-post.module').then(m => m.EstudiantePostPageModule)
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
