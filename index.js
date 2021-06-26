const gameBoard = (function(){
  const gameBoard = []
  const newGame = "wtf"
  return {
    gameBoard: gameBoard
  }
})();

const Player = (name) => {
  const getName  = () => name;

  return {getName}
}


const jimmie = Player('jim');