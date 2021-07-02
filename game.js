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

module.exports = Game
