import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SurveyProvider } from '../../providers/survey/survey';
import { Survey } from '../../models/survey';
import { SurveyEachPage } from '../survey-each/survey-each';
import { QuestionBankProvider } from '../../providers/question-bank/question-bank';

/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {

  public loggedInUser;
  public allSurveys: Survey[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthProvider,
    private surveyService: SurveyProvider
    ) {
    this.loggedInUser = this.authService.getUser();
    this.surveyService.getAllSurveyByRider(this.loggedInUser.uid)
      .subscribe( (res) => {
        console.log(res);
        this.allSurveys = res;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
  }

  startNewBtnClick() {
    this.navCtrl.push(SurveyEachPage,{
      isNew: false,
      survey: new Survey(this.loggedInUser.uid)
    });
  }

}
