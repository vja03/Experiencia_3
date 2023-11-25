import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { RegistrarPage } from './pages/registrar/registrar.page';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio', 
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login', component: LoginPage,
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)

  },
  {
    path: 'registrar', component: RegistrarPage,
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule),
    canActivate : [AutorizadoGuard]
  },
  {
    path: 'tipo-user',
    loadChildren: () => import('./pages/tipo-user/tipo-user.module').then( m => m.TipoUserPageModule)
  },
  {
    path: 'logindocente',
    loadChildren: () => import('./pages/logindocente/logindocente.module').then( m => m.LogindocentePageModule)
  },
  {
    path: 'menuestudiante',
    loadChildren: () => import('./pages/menuestudiante/menuestudiante.module').then( m => m.MenuestudiantePageModule)
  },
  {
    path: 'menudocente',
    loadChildren: () => import('./pages/menudocente/menudocente.module').then( m => m.MenudocentePageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'perfilupdate',
    loadChildren: () => import('./pages/perfilupdate/perfilupdate.module').then( m => m.PerfilupdatePageModule)
  },
  {
    path: 'crearasignatura',
    loadChildren: () => import('./pages/crearasignatura/crearasignatura.module').then( m => m.CrearasignaturaPageModule)
  },
  {
    path: 'crearasignatura/:id',
    loadChildren: () => import('./pages/crearasignatura/crearasignatura.module').then( m => m.CrearasignaturaPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'menudocente',
    loadChildren: () => import('./pages/menudocente/menudocente.module').then( m => m.MenudocentePageModule)
  },
  {
    path: 'menudocente/:id',
    loadChildren: () => import('./pages/menudocente/menudocente.module').then( m => m.MenudocentePageModule)
  },
  {
    path: 'menuestudiante/:id',
    loadChildren: () => import('./pages/menuestudiante/menuestudiante.module').then( m => m.MenuestudiantePageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'qr/:codigo',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
      path: 'perfil/:id',
      loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
      canActivate: [AutorizadoGuard]
  
  },
  {
    path: 'perfilupdate/:id',
    loadChildren: () => import('./pages/perfilupdate/perfilupdate.module').then( m => m.PerfilupdatePageModule),
    canActivate: [AutorizadoGuard]
  },
 
  {
    path: 'periodoacad',
    loadChildren: () => import('./pages/periodoacad/periodoacad.module').then( m => m.PeriodoacadPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
