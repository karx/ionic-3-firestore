import { Question } from './../../models/question';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the EachQuestionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'each-question',
  templateUrl: 'each-question.html'
})
export class EachQuestionComponent {

  @Input() question: Question;
  text: string;

  constructor() {
    console.log('Hello EachQuestionComponent Component');
    this.text = 'Hello World';
  }

}
