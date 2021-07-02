const Player = require("./player");
const gameBoard = require("./gameBoard");

const Game = (one = null, two = null, gameBoard) => {
  let score = 0;
  let playerOne = one // Player()
  let playerTwo = two // Player()
  let gb = gameBoard

  const newGame = () => {
    // console.log(gb)
    // gb.board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }

  const changeTurn = () => {
    playerOne.toggleTurn()
    playerTwo.toggleTurn()
  }

  const move = (index, value) => {
    gb.move(index, value)
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
