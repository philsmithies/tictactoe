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