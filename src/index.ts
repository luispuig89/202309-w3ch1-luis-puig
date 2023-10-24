import { List } from './List';
import { characters } from './characters';
function index() {
  const appElement = document.querySelector<HTMLDivElement>('.app');
  if (appElement === null) return;
  const components = [new List('.app', characters)];
  console.log(components);
}

index();
