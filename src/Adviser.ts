import { Character } from './Character';

export class Adviser extends Character {
  adviserTo: Character;
  // eslint-disable-next-line max-params
  constructor(
    name: string,
    family: string,
    age: number,
    adviserTo: Character,
    dead: boolean = false
  ) {
    super(name, family, age, dead);
    this.adviserTo = adviserTo;
  }

  says() {
    return 'No sé por qué, pero creo que voy a morir pronto';
  }
}
