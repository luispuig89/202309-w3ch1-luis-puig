import { Character } from './Character';

export class Adviser extends Character {
  adviserTo: Character;

  constructor(name: string, family: string, age: number, adviserTo: Character) {
    super(name, family, age);
    this.adviserTo = adviserTo;
  }

  says() {
    return 'No sé por qué, pero creo que voy a morir pronto';
  }
}
