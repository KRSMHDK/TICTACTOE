let gameBoard = ["", "", "", "", "", "", "", "", ""];

function makeboard() {
  for (i = 0; i < gameBoard.length; i++) {
    let board = document.querySelector("#board");

    let value = document.createElement("div");
    value.className = "value";
    value.id = i;
    value.setAttribute("onclick", "insertValue(this)");
    value.textContent = gameBoard[i];

    board.appendChild(value);
  }
}

let turn = 1;
let game = 0;
let winner = "";
function insertValue(elmnt) {
  if (turn % 2 == 0) {
    value = "X";
  } else {
    value = "O";
  }
  turn++;
  gameBoard[elmnt.id] = value;

  elmnt.textContent = value;
  elmnt.removeAttribute("onClick");

  checkingWinner();
}

function checkingWinner() {
  if (gameBoard[0] == "O" && gameBoard[1] == "O" && gameBoard[2] == "O") {
    winner = "O Wins";
    endGame();
  }

  if (gameBoard[3] == "O" && gameBoard[4] == "O" && gameBoard[5] == "O") {
    winner = "O Wins";
    endGame();
  }

  if (gameBoard[6] == "O" && gameBoard[7] == "O" && gameBoard[8] == "O") {
    winner = "O Wins";
    endGame();
  }

  if (gameBoard[0] == "O" && gameBoard[3] == "O" && gameBoard[6] == "O") {
    winner = "O Wins";
    endGame();
  }

  if (gameBoard[1] == "O" && gameBoard[4] == "O" && gameBoard[7] == "O") {
    winner = "O Wins";
    endGame();
  }
  if (gameBoard[2] == "O" && gameBoard[5] == "O" && gameBoard[8] == "O") {
    winner = "O Wins";
    endGame();
  }

  if (gameBoard[0] == "O" && gameBoard[4] == "O" && gameBoard[8] == "O") {
    winner = "O Wins";
    endGame();
  }

  if (gameBoard[2] == "O" && gameBoard[4] == "O" && gameBoard[6] == "O") {
    winner = "O Wins";
    endGame();
  }
  // X
  if (gameBoard[0] == "X" && gameBoard[1] == "X" && gameBoard[2] == "X") {
    winner = "X Wins";
    endGame();
  }

  if (gameBoard[3] == "X" && gameBoard[4] == "X" && gameBoard[5] == "X") {
    winner = "X Wins";
    endGame();
  }

  if (gameBoard[6] == "X" && gameBoard[7] == "X" && gameBoard[8] == "X") {
    winner = "X Wins";
    endGame();
  }

  if (gameBoard[0] == "X" && gameBoard[3] == "X" && gameBoard[6] == "X") {
    winner = "X Wins";
    endGame();
  }

  if (gameBoard[1] == "X" && gameBoard[4] == "X" && gameBoard[7] == "X") {
    winner = "X Wins";
    endGame();
  }
  if (gameBoard[2] == "X" && gameBoard[5] == "X" && gameBoard[8] == "X") {
    winner = "X Wins";
    endGame();
  }

  if (gameBoard[0] == "X" && gameBoard[4] == "X" && gameBoard[8] == "X") {
    winner = "X Wins";
    endGame();
  }

  if (gameBoard[2] == "X" && gameBoard[4] == "X" && gameBoard[6] == "X") {
    winner = "X Wins";
    endGame();
  }

  if (turn >= 10 && game == 0) {
    winner = "Draw";
    endGame();
  }
}

makeboard();

function endGame() {
  game = 1;
  let offvalue = document.getElementsByClassName("value");
  for (let i = 0; i < offvalue.length; i++) {
    offvalue[i].removeAttribute("onClick");
  }
  showResult();
}

function restart() {
  let removeBoard = document.getElementById("board");
  while (removeBoard.firstChild) {
    removeBoard.removeChild(removeBoard.firstChild);
  }
  makeboard();
}

function showResult() {
  let result = document.getElementById("result");
  result.textContent = winner;
}
