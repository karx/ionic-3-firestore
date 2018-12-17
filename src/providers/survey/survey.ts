import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Survey } from '../../models/survey';
import { map } from 'rxjs/operators';

/*
  Generated class for the SurveyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SurveyProvider {

  private _COL = 'Surveys'
  private surveysCollection: AngularFirestoreCollection<any>;
  constructor(
    private db: AngularFirestore
  ) {
    this.surveysCollection = db.collection(this._COL);
    console.log('Hello RidersProvider Provider');
  }

  getAllSurveyByRider(uid) {
    return this.db.collection(this._COL, ref => ref.where('uid', '==', uid))
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Survey;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  createNewSurvey(survey: Survey) {
    return this.surveysCollection.add({
      ...survey
    });
  }

  updateSurvey(survey: Survey) {
    return this.surveysCollection.doc(survey.id).update({
      ...survey
    });
  }s
}
