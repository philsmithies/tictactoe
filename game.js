const Player = require("./player");

const Game = (one = null, two = null) => {
  let score = 0;
  let playerOne = one // Player()
  let playerTwo = two // Player()

  const newGame = () => {
    gameBoard= ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }

  const changeTurn = () => {
    playerOne.toggleTurn()
    playerTwo.toggleTurn()
  }

  return {
    playerOne: playerOne,
    playerTwo: playerTwo,
    changeTurn: changeTurn,
    score: score,
    newGame: newGame,
  }
}

const p1 = Player(false, "P1")
const p2 = Player(true, "P2")
const g = Game(p1, p2)

module.exports = Game
