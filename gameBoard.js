const GameBoard = () => {
  let board = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

  const move = (index, value) => {
    board[index] = value
  }

  const resetBoard = () => {
    board = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
  }

  return {
    move,
    resetBoard,
    get board() { return board }
  };
}

module.exports = GameBoard