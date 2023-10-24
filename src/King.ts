import { Character } from './Character';

export class King extends Character {
  reignYears: number;

  constructor(name: string, family: string, age: number, reignYears: number) {
    super(name, family, age);
    this.reignYears = reignYears;
  }

  says() {
    return 'Vais a morir todos';
  }
}
