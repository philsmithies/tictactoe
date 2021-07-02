const Player = (turn, name) => {
  let playerName = name;
  let isMyTurn = turn;
  const toggleTurn = () => { 
    console.log(`toggle: ${isMyTurn}`)
    isMyTurn = !isMyTurn 
  }
  return {
    get isMyTurn() { return isMyTurn },
    get playerName() { return playerName },
    toggleTurn
  }
}

module.exports = Player
