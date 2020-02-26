import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Section for all auth component starts
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IonicModule } from '@ionic/angular';
// Section for all auth component ends


@NgModule({
  declarations: [LoginComponent,SignupComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class AuthModule { }
