import { Question } from './../../models/question';
import { questionBank } from './../../config/questionbank';
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
  public totalQuestionBank: Question[] = questionBank;
  public currentQuestion: Question;
  public currentQuestionIndex = 0;
  public surveyEnded = false;

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
    this.nextQuestion();
  }
  getImageFromCamera() {

  }

  nextQuestion() {
    if(this.currentQuestionIndex < this.totalQuestionBank.length) {
      this.currentQuestion = this.totalQuestionBank[this.currentQuestionIndex++];
    } else {
      this.surveyEnded = true;
      console.log(this.surveyEnded);
    }
  }

  saveAnswerFromUser(ans: string) {
    console.log(ans);
    this.nextQuestion();
  }



}
