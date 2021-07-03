import game from './game.js';
import displayController from './displayController';
import './style.css';

function component() {
  const element = document.createElement('div');
  displayController.buildBoard()
  // Lodash, currently included via a script, is required for this line to work

  return element;
}

document.body.appendChild(component());