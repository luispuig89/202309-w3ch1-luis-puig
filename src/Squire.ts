import { Character } from './Character';
import { Fighter } from './Fighter';

export class Squire extends Character {
  serves: Fighter;
  servility: number;
  // eslint-disable-next-line max-params
  constructor(
    name: string,
    family: string,
    age: number,
    dead: boolean = false,
    serves: Fighter,
    servility: number
  ) {
    super(name, family, age, dead);
    this.serves = serves;
    this.servility = servility;
  }

  says() {
    return 'Soy un loser';
  }
}
