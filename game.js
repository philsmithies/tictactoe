const Player = require("./player");
const gameBoard = require("./gameBoard");

const Game = (one = null, two = null, gameBoard) => {
  let score = 0;
  let playerOne = one // Player()
  let playerTwo = two // Player()
  let gb = gameBoard

  const newGame = () => {
    gb.resetBoard()
  }

  const changeTurn = () => {
    playerOne.toggleTurn()
    playerTwo.toggleTurn()
  }

  const move = (index, value) => {
    if (gb.board[index] != 'X') {
      gb.move(index, value) 
    } else {
      throw new Error('Space is taken')
    }
  }

  return {
    gb: gb,
    move: move, 
    playerOne: playerOne,
    playerTwo: playerTwo,
    changeTurn: changeTurn,
    score: score,
    newGame: newGame,
  }
}

// const p1 = Player(false, "P1")
// const p2 = Player(true, "P2")
// const g = Game(p1, p2)

module.exports = Game
