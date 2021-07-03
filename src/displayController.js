const gameBoard = require('./gameBoard')
const gameLogic = require('./game')
const Player = require('./player')
const gb = gameBoard()
const p1 = Player(true, 'X')
const p2 = Player(false, 'O')
const game = gameLogic(p1, p2, gb)

const DisplayController = (() => {
  const displayController = document.getElementById("displayController");
  const turn = document.getElementById("turn");

  const buildBoard = function () {
    game.gb.board.map((x, i) => {
      const createDiv = document.createElement("div");
      createDiv.classList.add("square");
      if (game.gb.board[i] == '-') {
        createDiv.innerText = ''
      } else {
        createDiv.innerText = game.gb.board[i]
      }

      createDiv.addEventListener('click', () => {
        console.log('clciekd')
        game.move(i, 'X')
        createDiv.innerText = game.gb.board[i]
      })
      displayController.appendChild(createDiv)
    });
  };

  return {
    buildBoard: buildBoard,
  };
})

module.exports = DisplayController()