import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {  AngularFirestore } from '@angular/fire/firestore';
import { AlertController, LoadingController } from '@ionic/angular'
import { AuthService } from 'src/app/provider/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  email : string = ""
  password : string = ""
  cpassword : string = ""
  username : string = ""
  constructor(private loadingController: LoadingController, private router: Router, private user: AuthService, private afAuth: AngularFireAuth, private afstore:AngularFirestore, private alert: AlertController) { }

  ngOnInit() {}
 async register(){
    const {email , password, cpassword,username } = this; 
    if (password !== cpassword) {
      this.showAlert("Error!", "Paaword don't match")
    } try{
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 3000
      });
      await loading.present();
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      this.showAlert("Success","Registration is successful");

      this.afstore.doc(`users/${res.user.uid}`).set({
        username,
       
        email,
        password,
      })

      this.user.setUser({
        email,
        uid: res.user.uid
      })
      this.router.navigate(['/login']);
    } catch (err) {
      this.showAlert("Error", err.message)
    }
  }
  navigateToLogin(){
    this.router.navigate(['/login']);
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
