import { Note } from './note';

export class User {
  id: number = 0;
  birthDate: Date = new Date('1/1/2000');
  name: string = '';
  avatar: string = '';
  bio: string = '';

  notes: Note[] = [];
}
