import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../provider/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private user : AuthService) { }

  async canActivate(route) {
    if(await this.user.isAuthenticated()){
      return true;
    } else {

      this.router.navigate(['/'])
      return false
    }
  }
}
