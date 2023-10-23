export abstract class Character {
  name: string;
  family: string;
  age: number;
  dead: boolean;
  constructor(
    name: string,
    family: string,
    age: number,
    dead: boolean = false
  ) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.dead = dead;
  }

  abstract says(): string;

  kill(): void {
    this.dead = true;
  }
}
