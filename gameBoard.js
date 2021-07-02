const GameBoard = () => {
  let board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const move = (index, value) => {
    board[index] = value
  }

  return {
    move,
    get board() { return board }
  };
}

module.exports = GameBoard