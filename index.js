const gameBoard = (function(){
  const gameBoard = []
  const newGame = "wtf"
  return {
    gameBoard: gameBoard
  }
})();

const displayController = (function(){
  const displayController = document.getElementById('displayController')
  for (i = 0; i < 9; i++){
    const createDiv = document.createElement('div')
    createDiv.classList.add('square')
    createDiv.innerText = 'x'
    displayController.appendChild(createDiv)
  }
})();

const Player = ( name ) => {
  const sayHello = () => console.log('hello')
  return {name, sayHello}
}

const jimmie = Player('jim');
const bill = Player('bill');