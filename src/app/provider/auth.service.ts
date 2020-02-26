import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
interface user{
    email: string;
    uid: string;
}
@Injectable()
export  class   AuthService{
    private user : user;

     constructor(private afAuth: AngularFireAuth) {

     }

     setUser(user:user){
        this.user = user
     }
    async isAuthenticated(){
         if(this.user) return true;
         
         const user = await this.afAuth.authState.pipe(first()).toPromise()

         if (user) {
             this.setUser({
                 email: user.email,
                 uid:user.uid
             })
             return true
         }
         return false
     }

     getUID(){
        //  return this.user.email;
         if (!this.user) {
             if (this.afAuth.auth.currentUser) {
                 const user = this.afAuth.auth.currentUser
                 this.setUser({
                     email: user.email,
                     uid:user.uid,
                    //  phone: user.phone,
                    //  username: user.username
                 })
                 return user.uid
             } else {
                 throw new Error("User is not logged in");
             }
         } else {
            return this.user.uid
         }
     }
}