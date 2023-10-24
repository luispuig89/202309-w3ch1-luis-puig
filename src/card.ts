import { Adviser } from './Adviser';
import { Component } from './Component';
import { Fighter } from './Fighter';
import { King } from './King';
import { Squire } from './Squire';

export type Category = King | Fighter | Adviser | Squire;

export class Card extends Component {
  characters: Category[];
  constructor(selector: string, characters: Category[]) {
    super(selector);
    this.characters = characters;
    this.template = this.createTemplate();
    this.render();
  }

  makeExtraData(item: Category) {
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

  makeEmoji(item: Category) {
    let result = '';
    if (item instanceof King) {
      result = '👑';
    }

    if (item instanceof Fighter) {
      result = '🗡';
    }

    if (item instanceof Adviser) {
      result = '🎓';
    }

    if (item instanceof Squire) {
      result = '🛡';
    }

    return result;
  }

  /* HandleButton(item: Category) {
    item.isDead = true;
    this.clear();
    this.manageComponent(item);
  }

  manageComponent(item: Category) {
    const buttonElement = this.element.querySelector('button');
    buttonElement?.addEventListener('click', () => {
      item.isDead = true;
    });
  } */

  createTemplate() {
    return this.characters
      .map(
        (item) => `
    <li class="character col">
    <div class="card character__card">
      <img src="/${item.name.toLowerCase()}.jpg" alt="${item.name} ${
          item.family
        }" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${item.name} ${
          item.family
        }</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${item.age} años</li>
            <li>
              Estado: ${
                item.isDead
                  ? `<i class="fas fa-thumbs-down">`
                  : `<i class="fas fa-thumbs-up">`
              }
              </i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class ="list-unstyled" id= "extra">
          ${this.makeExtraData(item)}
          </ul>
        <div class="character__actions">
          <button class="character__action btn">habla</button>
          <button class="character__action btn">muere</button>
        </div>
      </div>
    </div>
      <i class="emoji">${this.makeEmoji(item)}</i>
    </div>
    </li>`
      )
      .join('');
  }
}
