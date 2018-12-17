import { questionBank } from './../../config/questionbank';
import { QuestionBankProvider } from './../../providers/question-bank/question-bank';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SurveyProvider } from '../../providers/survey/survey';
import { Survey } from '../../models/survey';

/**
 * Generated class for the SurveyEachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey-each',
  templateUrl: 'survey-each.html',
})
export class SurveyEachPage {

  public _survey: Survey;
  public isNew: boolean;
  public totalQuestionBank = questionBank;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthProvider,
    private surveyService: SurveyProvider,
    ) {
      this._survey = this.navParams.get('survey');
      this.isNew = this.navParams.get('isNew');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyEachPage');
    console.log(this.totalQuestionBank);
  }
  getImageFromCamera() {

  }



}
