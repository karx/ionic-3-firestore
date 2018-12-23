import { Question } from './../../models/question';
import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() answerFromUser = new EventEmitter();
  text: string;
  public textAnswer: string;

  constructor() {
    console.log(this.question);
    console.log('Hello EachQuestionComponent Component');
    this.text = 'Hello World';
  }
  optionClicked(answer: string) {
    console.log(answer);
    this.answerFromUser.emit(answer);
    this.textAnswer = '';
  }

}
