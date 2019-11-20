import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./PAGES/admin/admin-tabs/admin-tabs.module').then(m => m.AdminTabsPageModule)
  },
  {
    path: 'auxiliar',
    loadChildren: () => import('./PAGES/auxiliar/auxiliar-tabs/auxiliar-tabs.module').then(m => m.AuxiliarTabsPageModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./PAGES/estudiante/estudiante-tabs/estudiante-tabs.module').then(m => m.EstudianteTabsPageModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin-home', loadChildren: './PAGES/admin/admin-home/admin-home.module#AdminHomePageModule' },
  { path: 'login', loadChildren: './PAGES/login/login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './PAGES/registro/registro.module#RegistroPageModule' },
  { path: 'auxiliar-home', loadChildren: './PAGES/auxiliar/auxiliar-home/auxiliar-home.module#AuxiliarHomePageModule' },
  { path: 'estudiante-home', loadChildren: './PAGES/estudiante/estudiante-home/estudiante-home.module#EstudianteHomePageModule' },
  { path: 'recuperacion', loadChildren: './PAGES/recuperacion/recuperacion.module#RecuperacionPageModule' },
  { path: 'estudiante-cursos', loadChildren: './PAGES/estudiante/estudiante-cursos/estudiante-cursos.module#EstudianteCursosPageModule' },
  { path: 'estudiante-ticket', loadChildren: './PAGES/estudiante/estudiante-ticket/estudiante-ticket.module#EstudianteTicketPageModule' },
  { path: 'auxiliar-cursos', loadChildren: './PAGES/auxiliar/auxiliar-cursos/auxiliar-cursos.module#AuxiliarCursosPageModule' },
  { path: 'auxiliar-post', loadChildren: './PAGES/auxiliar/auxiliar-post/auxiliar-post.module#AuxiliarPostPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
