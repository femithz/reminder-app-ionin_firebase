import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { 
    path: '',
    component: TabsPage,
    // redirectTo: 'home',
    children:[
      { 
        path: 'home',
        component:HomeComponent
    },
    { 
      path: 'account',
      loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
    },
    { 
      path: 'add',
      loadChildren: () => import('../add-reminder/add-reminder.module').then( m => m.AddReminderPageModule)
    },
    {
      path: 'reminder',
      loadChildren: () => import('../reminders/reminders.module').then(m => m.RemindersPageModule)
    }
    ]
}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes) 
  ],
  declarations: [TabsPage,HomeComponent]
})
export class TabsPageModule {}
