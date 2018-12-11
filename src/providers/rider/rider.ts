import { HiLocation } from './../../models/location';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'firebase';

/*
  Generated class for the RiderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RiderProvider {

  private _COL = 'Riders'
  private ridersCollection: AngularFirestoreCollection<any>;
  constructor(
    private db: AngularFirestore
  ) {
    this.ridersCollection = db.collection(this._COL);
    console.log('Hello RidersProvider Provider');
  }

  getAllRiders() {
    return this.ridersCollection.valueChanges();
  }
  createRiderInfo(userData: User) {
    return this.ridersCollection.doc(userData.uid).set({
      uid: userData.uid,
      displayName: userData.displayName,
      email: userData.email
    });
  }

  updateRiderLastLocation(userData: User, location: HiLocation) {
    return this.ridersCollection.doc(userData.uid).update({
      last_location: {...location}
    });
  }



}
