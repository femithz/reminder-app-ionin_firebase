import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/provider/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  userPosts: any;

  constructor(private router: Router, private afs: AngularFirestore, private user: AuthService) {
    const posts = afs.doc(`users/${user.getUID()}`)
    this.userPosts = posts.valueChanges()
    console.log(this.userPosts['email']);
   }

  ngOnInit() {
  }
  fileChneged(event) {
    const files = event.target.files;
  }
  navigateToHome(){
    this.router.navigate(['dashboard/tabs/home']);
  }
}
