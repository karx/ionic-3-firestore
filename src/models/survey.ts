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
}
