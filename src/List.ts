import { Card, Category } from './Card';
import { Component } from './Component';

export class List extends Component {
  characters: Category[];
  constructor(selector: string, characters: Category[]) {
    super(selector);
    this.characters = characters;
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
    const elements = [new Card('.characters-list', this.characters)];
    console.log(elements);
  }

  createTemplate() {
    return ` 
    <ul class="characters-list row list-unstyled">
    </ul>
    `;
  }
}
