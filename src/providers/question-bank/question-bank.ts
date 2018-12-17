import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QuestionBankProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionBankProvider {

  private _COL = 'Quetions'
  private questionCollections: AngularFirestoreCollection<any>;
  constructor(
    private db: AngularFirestore
  ) {
    this.questionCollections = db.collection(this._COL);
    console.log('Hello RidersProvider Provider');
  }

  getAllQuestions() {
    return this.questionCollections.valueChanges();
  }
}
