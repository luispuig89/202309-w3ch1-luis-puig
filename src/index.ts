import { renderCard } from './card';
import { characters } from './characters';
function index() {
  const appElement = document.querySelector<HTMLDivElement>('.app');
  if (appElement === null) return;
  renderCard(appElement, characters);
}

index();
