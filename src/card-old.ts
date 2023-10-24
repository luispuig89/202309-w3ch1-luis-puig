/* Import { Adviser } from './Adviser';
import { Character } from './Character';
import { Fighter } from './Fighter';
import { King } from './King';
import { Squire } from './Squire';
let list = '';
export function renderCard(characters: Character[]) {
  list += `<ul class="characters-list row list-unstyled">`;
  characters.forEach((item) => {
    list += '<li class="character col"><div class="card character__card">';
    list += `<img src="${item.name}.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />`;
    list += `<div class="card-body">`;
    list += `<h2 class="character__name card-title h4">${item.name} ${item.family}</h2>`;
    list += `<div class="character__info"><ul class="list-unstyled">`;
    list += `<li>Edad: ${item.age} años</li>`;

    if (item.isDead) {
      list += `<li>Estado: <i class="fas fa-thumbs-down"></i></li>`;
    } else {
      list += `<li>Estado: <i class="fas fa-thumbs-up"></i></li>`;
    }

    list += `</ul></div>`;
    list += `<div class="character__overlay"><ul class="list-unstyled">`;
    if (item instanceof King) {
      list += `<li>Años de reinado: ${item.reignYears}</li>`;
    }

    if (item instanceof Adviser) {
      list += `<li>Asesora a: ${item.adviserTo.name} ${item.adviserTo.family}</li>`;
    }

    if (item instanceof Fighter) {
      list += `<li>Arma: ${item.weapon}</li><li>Destreza: ${item.dexterity}</li>`;
    }

    if (item instanceof Squire) {
      list += `<li>Sirve a: ${item.serves.name} ${item.serves.family}</li><li>Peloteo: ${item.servility}</li>`;
    }

    list += `</ul><div class="character__actions"><button class="character__action btn">habla</button><button class="character__action btn">muere</button></div></div></div>`;

    if (item instanceof King) {
      list += `<i class="emoji">👑</i>`;
    }

    if (item instanceof Adviser) {
      list += `<i class="emoji">🎓</i>`;
    }

    if (item instanceof Fighter) {
      list += `<i class="emoji">🗡</i>`;
    }

    if (item instanceof Squire) {
      list += `<i class="emoji">🛡</i>`;
    }

    list += `</div></li>`;
  });
  list += `</ul>`;
  return list;
}
  */
