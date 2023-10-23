import { Character } from './Character';

export class Adviser extends Character {
  adviserTo: string;
  // eslint-disable-next-line max-params
  constructor(
    name: string,
    family: string,
    age: number,
    dead: boolean = false,
    adviserTo: string
  ) {
    super(name, family, age, dead);
    this.adviserTo = adviserTo;
  }

  says() {
    return 'No sé por qué, pero creo que voy a morir pronto';
  }
}
