import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyEachPage } from './survey-each';

@NgModule({
  declarations: [
    SurveyEachPage,
  ],
  imports: [
    IonicPageModule.forChild(SurveyEachPage),
  ],
})
export class SurveyEachPageModule {}
