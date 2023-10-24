/* Import { Adviser } from './Adviser';
import { Category } from './Card';
import { Component } from './Component';
import { Fighter } from './Fighter';
import { King } from './King';
import { Squire } from './Squire';

export class ExtraData extends Component {
  character: Category;
  constructor(selector: string, character: Category) {
    super(selector);
    this.character = character;
    this.template = this.createTemplate(character);
    this.render();
  }

  createTemplate(item: Category) {
    let result = '';
    if (item instanceof King) {
      result = `<li>Años de reinado: ${item.reignYears}</li>`;
    }

    if (item instanceof Fighter) {
      result = `
      <li>Arma: ${item.weapon}</li>
      <li>Destreza: ${item.dexterity}</li>`;
    }

    if (item instanceof Adviser) {
      result = `
      <li>Sirve a: ${item.adviserTo.name} ${item.adviserTo.family}</li>`;
    }

    if (item instanceof Squire) {
      result = `
        <li>Peloteo: ${item.servility}</li>
        <li>Asesora a: ${item.serves.name} ${item.serves.family}</li>`;
    }

    return result;
  }
}
  */
