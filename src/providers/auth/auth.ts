import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { auth, User } from 'firebase';
import { Observable, Subject, ReplaySubject } from 'rxjs';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public user: User;
  public userSubject: ReplaySubject<User> = new ReplaySubject(1);
  // public userObservable: Subject<User> = new;
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe( (user) => {
      this.user = user;
      // this.userObservable.next(this.user);
      this.userSubject.next(this.user);
      console.log(this.user);
    });
  }
  login(): Promise<any> {
    if (!(<any>window).cordova) {
      return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } else {
      return this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
      .then(() => {
        return this.afAuth.auth.getRedirectResult().then( (result: any) => {
          // This gives you a Google Access Token.
          // You can use it to access the Google API.
          let token = result.credential.accessToken;
          // The signed-in user info.
          let user = result.user;
          console.log(token, user);
        }).catch(function(error) {
          // Handle Errors here.
          alert(error.message);
        });
      });
  }
  }
  getLoggedInStatus(): boolean {
    console.log(this.user);
    console.log(this.user && this.user !== null);
    return (this.user && this.user !== null);
  }
  getUser() {
    return this.user;
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
