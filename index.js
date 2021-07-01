// const gameBoard = (() => {
//   score = 0;
//   let p1turn = true;
//   let gameBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   function newGame() {
//     this.gameBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   }
//   changeTurn = () => (this.p1turn = false);
//   return {
//     changeTurn: changeTurn,
//     p1turn: p1turn,
//     score: score,
//     newGame: newGame,
//     gameBoard: gameBoard,
//   };
// })();

const GameBoard = () => {
  let score = 0;
  let playerOne = null // Player()
  let playerTwo = null // Player()
  let gameBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const newGame = () => {
    gameBoard= ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }

  const setPlayers = (one, two)  => {
    playerOne = one;
    playerTwo = two
  }

  const changeTurn = () => {
    playerOne.toggleTurn()
    playerTwo.toggleTurn()
  }

  return {
    changeTurn: changeTurn,
    p1turn: p1turn,
    score: score,
    newGame: newGame,
    gameBoard: gameBoard,
  };
}

const Player = (isMyTurn) => {
  let isMyTurn = isMyTurn;

  const toggleTurn = () => { isMyTurn = !isMyTurn }
  return {
    toggleTurn
  }
}

const gb = GameBoard() 
gb.setPlayers(Player(true), Player(false))

// const calculator = (() => {
  // let isAdmin = false
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;
//  const specialDivide = (a, b, c) => isAdmin ? a / b / c : "nothing"
//   return {
//     add,
//     sub,
//     mul,
//     div,
//     specialDivide
//   };
// })();

calculator = {
      add,
      sub,
      mul,
      div,
};

const displayController = (() => {
  const displayController = document.getElementById("displayController");
  const turn = document.getElementById("turn");

  const buildBoard = function () {
    gameBoard.gameBoard.map((x, i) => {
      const createButton = document.createElement("button");
      const createDiv = document.createElement("div");
      createButton.innerText = gameBoard.gameBoard[i];
      createButton.addEventListener("click", () => {
        if (gameBoard.gameBoard[i] == "X" || gameBoard.gameBoard[i] == "0") {
          alert("cannot go here");
        } else if (gameBoard.p1turn) {
          gameBoard.gameBoard[i] = "X";
          gameBoard.p1turn = !gameBoard.p1turn;
        } else {
          gameBoard.gameBoard[i] = "0";
          gameBoard.p1turn = !gameBoard.p1turn;
        }
        gameBoard.p1turn
          ? (turn.innerText = "P1 Turn")
          : (turn.innerText = "P2 Turn");
        createButton.innerText = gameBoard.gameBoard[i];
      });
      createDiv.appendChild(createButton);
      createDiv.classList.add("square");
      displayController.appendChild(createDiv);
    });
  };

  buildBoard();

  return {
    buildBoard: buildBoard,
  };
})

const Player = (name) => {
  const sayHello = () => console.log("hello");
  return { name, sayHello };
};
