import { Question } from './../../models/question';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';

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
export class EachQuestionComponent implements OnChanges {

  @Input() question: Question;
  @Output() answerFromUser = new EventEmitter();
  text: string;
  public textAnswer: string;

  constructor(
    private tts: TextToSpeech
  ) {
    console.log(this.question);
    console.log('Hello EachQuestionComponent Component');
    this.text = 'Hello World';
  }

  ngOnChanges(changes: SimpleChanges) {
    const st = changes.question;
    this.readQuestion();
  }
  optionClicked(answer: string) {
    console.log(answer);
    this.answerFromUser.emit(answer);
    this.textAnswer = '';
  }
  readQuestion() {
    if(this.question && this.question.phrase) {
      this.tts.speak(this.question.phrase);
    }
  }

}
