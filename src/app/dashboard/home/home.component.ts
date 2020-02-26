import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { DropDownComponent } from '../drop-down/drop-down.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  constructor(private router: Router, public popoverCtrl: PopoverController) { }

 
  
  ngOnInit() {}

  navigateToProfile(){
    this.router.navigate(['dashboard/tabs/account']);
  }
  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
        component: DropDownComponent,
        event: ev,
        animated: true,
        showBackdrop: true
    });
    return await popover.present();
}

}
