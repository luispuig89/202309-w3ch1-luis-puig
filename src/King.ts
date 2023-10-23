import { Character } from './Character';

export class King extends Character {
  years: number;
  // eslint-disable-next-line max-params
  constructor(
    name: string,
    family: string,
    age: number,
    years: number,
    dead: boolean = false
  ) {
    super(name, family, age, dead);
    this.years = years;
  }

  says() {
    return 'Vais a morir todos';
  }
}
