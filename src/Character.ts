export abstract class Character {
  name: string;
  family: string;
  age: number;
  isDead: boolean;
  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isDead = false;
  }

  abstract says(): string;

  kill(): void {
    this.isDead = true;
  }
}
