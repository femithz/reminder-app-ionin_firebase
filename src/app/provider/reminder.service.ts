import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor(private firestore:AngularFirestore) { }
  getReminders(){
    return  this.firestore.collection('reminders').snapshotChanges();
   }
}
