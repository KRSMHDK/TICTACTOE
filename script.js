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
    console.log("Win");
  }
}
makeboard();
