import { Character } from './Character';

export class Fighter extends Character {
  weapon: string;
  dexterity: number;
  // eslint-disable-next-line max-params
  constructor(
    name: string,
    family: string,
    age: number,
    weapon: string,
    dexterity: number
  ) {
    super(name, family, age);
    this.weapon = weapon;
    this.dexterity = dexterity;
  }

  says() {
    return 'Primero pego y liego pregunto';
  }
}
