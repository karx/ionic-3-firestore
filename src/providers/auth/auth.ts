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
  login() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
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
