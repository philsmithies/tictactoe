const gameBoard = (function(){
  const gameBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  const newGame = "wtf"
  return {
    gameBoard: gameBoard
  }
})();

const displayController = (function(){
  const displayController = document.getElementById('displayController')
  const buildBoard = function () {
    gameBoard.gameBoard.map((x, i) => {
      const createButton = document.createElement('button')
      const createDiv = document.createElement('div')
      createButton.innerText = gameBoard.gameBoard[i]
      createButton.addEventListener('click', () =>{
        gameBoard.gameBoard[i] = 'X'
        console.log(gameBoard.gameBoard)
        createButton.innerText = gameBoard.gameBoard[i]
      })
      createDiv.appendChild(createButton)
      createDiv.classList.add('square')
      displayController.appendChild(createDiv)
    })
  }
  buildBoard()
  return {
    buildBoard: buildBoard
  }
})();

const Player = ( name ) => {
  const sayHello = () => console.log('hello')
  return {name, sayHello}
}

const jimmie = Player('jim');
const bill = Player('bill');