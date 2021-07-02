const Player = require("./player");
const gameBoard = require("./gameBoard");

const Game = (one = null, two = null, gameBoard) => {
  let score = 0;
  let playerOne = one // Player()
  let playerTwo = two // Player()
  let gb = gameBoard
  let winner = ''

  const newGame = () => {
    gb.resetBoard()
    winner = ''
  }

  const changeTurn = () => {
    playerOne.toggleTurn()
    playerTwo.toggleTurn()
  }

  const move = (index, value) => {
    if (value == 'X' || value == 'O' ) {
      if (gb.board[index] != 'X' && gb.board[index] != 'O') {
        gb.move(index, value) 
        changeTurn()
        checkWin(index)
      } else {
        throw new Error('Space is taken')
      }
    } else {
      throw new Error('Invalid Character')
    }
  }

  const checkWin = (index) => {
    winner = ''; 
      // horizontal wins
    return winnerMove(0,3,6) 
       ||  winnerMove(3,4,5) 
       ||  winnerMove(6,7,8) 
       // vertical wins
       ||  winnerMove(0,3,6) 
       ||  winnerMove(1,4,7) 
       ||  winnerMove(2,5,8) 
       // diagonal wins
       ||  winnerMove(0,4,8)  
       ||  winnerMove(6,4,2)
       ||  isDraw();
  }

  const winnerMove = (move1, move2, move3) => {
      let match1 = gb.board[move1];
      if (match1 == '-') return false;
      let match2 = gb.board[move2];
      if (match1 != match2) return false;
      let match3 = gb.board[move3];
      if (match1 != match3) return false;
      winner = match1;
      return true;
  }

  const isDraw = () => {
    for(let i=0; i<9; i++){
      if (gb.board == '-') return false;
    }
    winner = 'Draw'
    return true
  }

  return {
    checkWin,
    gb: gb,
    move: move, 
    playerOne: playerOne,
    playerTwo: playerTwo,
    changeTurn: changeTurn,
    score: score,
    get winner() { return winner },
    newGame: newGame,
  }
}

module.exports = Game
