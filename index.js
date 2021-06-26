const gameBoard = (function(){
  const gameBoard = ['X', '0', 'X', '0', 'X', '0', 'X', 'X', '0', 'X']
  const newGame = "wtf"
  return {
    gameBoard: gameBoard
  }
})();

const displayController = (function(){
  const displayController = document.getElementById('displayController')
  for (i = 0; i < 9; i++){
    const createP = document.createElement('P')
    const createDiv = document.createElement('div')
    // createButton.addEventListener('click', () => {
    //   console.log('clicked')
    // })
    createP.innerText = gameBoard.gameBoard[i]
    createDiv.appendChild(createP)
    createDiv.classList.add('square')
    displayController.appendChild(createDiv)
  }
})();

const Player = ( name ) => {
  const sayHello = () => console.log('hello')
  return {name, sayHello}
}

const jimmie = Player('jim');
const bill = Player('bill');