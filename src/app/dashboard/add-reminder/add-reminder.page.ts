import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/provider/auth.service';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.page.html',
  styleUrls: ['./add-reminder.page.scss'],
})
export class AddReminderPage implements OnInit {
  title : string = "";
  time:string = "" ;
  date: string = "";
  note: string = "";
  constructor(
    private loadingController: LoadingController, 
    private router: Router, 
    private user: AuthService,
     private afAuth: AngularFireAuth, 
     private afstore:AngularFirestore,
      private alert: AlertController,
      private localNotifications: LocalNotifications) { }

  ngOnInit() {
  }


  async add(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 3000
    });
    await loading.present();
    const {title , time, date,   note } = this; 
    if (note === null || title === null || time === null || date === null  ) {
      this.showAlert("Error!", "Any of this field can't be left empty!")
    } try{
      const res = await this.afAuth.auth.currentUser
      this.afstore.doc(`reminders/${res.uid}`).set({
        title,
        time,
        date,
        note,
      })
      this.showAlert("Success","Reminder added!");
      this.localNotifications.schedule({
        text: note,
        trigger: {at : new Date(new Date(date).getTime() + this.time) },
        led: 'FF0000',
        sound: null
      });
      this.router.navigate(['/dashboard/tabs/reminder']);
    } catch (err) {
      this.showAlert("Error", err.message)
    }
  }
  // Alert to me shown
  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    })
    await alert.present()
  }

}
