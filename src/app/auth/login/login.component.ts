import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/provider/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    email : string = ""
    password : string = ""
  constructor(private loadingController: LoadingController, private router: Router,
     public user: AuthService, private afAuth: AngularFireAuth, private alert: AlertController) { }

  ngOnInit() {}
 async navigateToDashboard(){
   try {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 3000
    });
    await loading.present();
     const {email , password} = this; 
         const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
         this.showAlert("Success","Login is successfully");
          if (res.user) {
                      this.user.setUser({
                        email,
                        uid: res.user.uid
                      })
          } 
         this.router.navigate(['/dashboard/tabs/home']);
   } catch (err) {
    this.showAlert("Error", err.message)
   }
  }
  navigateToSignup(){
    this.router.navigate(['/signup']);
  }
  navigateToForget(){
    this.router.navigate(['/forget']);
  }
  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    })
    await alert.present()
  }
}
