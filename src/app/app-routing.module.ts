import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'permissions',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/permissions/permissions.module').then(m => m.PermissionsPageModule)
  },
  {
    path: 'userinfo',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/userinfo/userinfo.module').then(m => m.UserinfoPageModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
