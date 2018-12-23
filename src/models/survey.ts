import { HiLocation } from './location';
import { Question } from './question';
import { Person } from './person';

export class Survey {
  id: string;
  uid: string;
  image_link: string;
  location: HiLocation;
  person: Person;
  timestamp: string;
  last_updated: string;
  questions: Question[];

  constructor(uid: string) {
    this.timestamp = new Date().toISOString();
    this.last_updated = new Date().toISOString();
    this.uid = uid;
    this.questions = [];
  }
}
