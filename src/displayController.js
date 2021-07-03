const gameBoard = require("./gameBoard");
const gameLogic = require("./game");
const Player = require("./player");
const gb = gameBoard();
const p1 = Player(true, "X");
const p2 = Player(false, "O");
const game = gameLogic(p1, p2, gb);

const DisplayController = () => {
  const displayController = document.getElementById("displayController");
  const turn = document.getElementById("turn");
  turn.innerText = `X's Turn`

  const buildBoard = function () {
    game.gb.board.map((x, i) => {
      const createDiv = document.createElement("div");
      createDiv.classList.add("square");

      if (game.gb.board[i] == "-") {
        createDiv.innerText = "";
      } else {
        createDiv.innerText = game.gb.board[i];
      }

      createDiv.addEventListener("click", () => {
        if (game.playerOne.isMyTurn) {
          game.move(i, "X");
        } else {
          game.move(i, "O");
        }
        if (game.winner == "X" || game.winner == "O") {
          turn.innerText = `The Winner is ${game.winner}`; 
        } else if (game.winner == "Draw") {
          turn.innerText = `It's a ${game.winner}!`; 
        } else if (game.playerOne.isMyTurn) {
          turn.innerText = "X's Turn";
        } else {
          turn.innerText = "O's Turn";
        }
        createDiv.innerText = game.gb.board[i];
      });
      displayController.appendChild(createDiv);
    });
  };

  return {
    buildBoard: buildBoard,
  };
};

module.exports = DisplayController();
