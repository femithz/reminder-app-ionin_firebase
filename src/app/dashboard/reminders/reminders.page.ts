import { Component, OnInit } from '@angular/core';
import { Reminder } from 'src/app/models/reminder.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReminderService } from 'src/app/provider/reminder.service'
import { LocalNotifications } from '@ionic-native/local-notifications';
@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
})
export class RemindersPage implements OnInit {

  list: Reminder[]
  constructor(private service: ReminderService,
    private firestore: AngularFirestore,
    private localNotifications: LocalNotifications
) { }

  ngOnInit() {

    // this.service.getReminders().subscribe(response => {
    //   this.list = response.map(item => {
    //     return {
    //       id: item.payload.doc.id,
    //       ...item.payload.doc.data()
    //     } as Reminder;
    //   })
    // })

    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      // data: { secret: key }
    });
    
  }

}
