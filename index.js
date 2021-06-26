const gameBoard = (function(){
  score = 0
  p1turn = true
  const gameBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  // const changeTurn = () => {
  //     p1turn = !p1turn
  //     p1turn ? turn.innerText = 'P1 Turn' : turn.innerText = 'P2 Turn'
  // }
  return {
    p1turn: p1turn, 
    score: score,
    gameBoard: gameBoard
  }
})();

const displayController = (function(){
  const displayController = document.getElementById('displayController')
  const turn = document.getElementById('turn')

  const buildBoard = function () {
    gameBoard.gameBoard.map((x, i) => {
      const createButton = document.createElement('button')
      const createDiv = document.createElement('div')
      createButton.innerText = gameBoard.gameBoard[i]
      createButton.addEventListener('click', () =>{
        gameBoard.gameBoard[i] = 'X'
        gameBoard.p1turn = !gameBoard.p1turn
        gameBoard.p1turn ? turn.innerText = 'P1 Turn' : turn.innerText = 'P2 Turn'
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