const GameBoard = () => {
  let board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const move = (index, value) => {
    board[index] = value
  }

  const resetBoard = () => {
    board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  }

  return {
    move,
    resetBoard,
    get board() { return board }
  };
}

module.exports = GameBoard