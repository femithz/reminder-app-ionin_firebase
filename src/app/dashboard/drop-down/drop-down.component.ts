import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

navigateToProfile(){
    this.router.navigate(['dashboard/tabs/account']);
  }
  logout(){
    this.router.navigate(['auth/login']);
  }
}
