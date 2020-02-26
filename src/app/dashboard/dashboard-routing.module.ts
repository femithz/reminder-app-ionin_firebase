import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const  DashboardRoutes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { 
    path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
];

