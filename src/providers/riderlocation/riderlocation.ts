import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HiLocation } from '../../models/location';

/*
  Generated class for the RiderlocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RiderlocationProvider {

  private _COL = 'HiLocations'
  private riderLocationCollection: AngularFirestoreCollection<any>;
  constructor(
    private db: AngularFirestore
  ) {
    this.riderLocationCollection = db.collection<HiLocation>(this._COL);
    console.log('Hello RiderlocationProvider Provider');
  }

  getHiLocations() {
    return this.riderLocationCollection.valueChanges();
  }
  getHiLocationsByUser(uid) {
    return this.db.collection(this._COL, ref => ref.where('user_uid', '==', uid))
      .valueChanges();

  }

  pushHiLocations(location: HiLocation) {
    return this.riderLocationCollection.add({...location});
  }

}
