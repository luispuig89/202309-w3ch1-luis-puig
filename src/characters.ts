import { Adviser } from './Adviser';
import { Fighter } from './Fighter';
import { King } from './King';
import { Squire } from './Squire';

export type Category = King | Fighter | Adviser | Squire;

const joffrey = new King('Joffrey', 'Baratheon', 19, 4);
const jaime = new Fighter('Jaime', 'Lannister', 42, 'Sword', 10);
const daenerys = new Fighter('Daenerys', 'Targaryen', 24, 'Dragons', 10);
const tyrion = new Adviser('Tyrion', 'Lannister', 32, daenerys);
const bronn = new Squire('Bronn', '', 46, jaime, 10);

export const characters = [joffrey, jaime, daenerys, tyrion, bronn];
