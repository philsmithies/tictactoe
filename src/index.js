import displayController from "./displayController";
import "./style.css";

function component() {
  displayController.buildBoard();
  return element;
}

document.body.appendChild(component());
