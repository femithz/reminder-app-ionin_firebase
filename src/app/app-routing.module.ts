import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)},
  {
  path: 'dashboard', 
  loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule), 
  canActivate: [AuthGuard]
 },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
