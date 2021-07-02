const Player = (turn, name) => {
  let playerName = name;
  let isMyTurn = turn;
  function toggleTurn() { 
    this.isMyTurn = !this.isMyTurn 
  }
  return {
    isMyTurn,
    playerName,
    toggleTurn
  }
}

module.exports = Player
