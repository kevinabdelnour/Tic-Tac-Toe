let currPlayer = 2;
let currBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

function playGame() {
  const cells = document.querySelectorAll(".cell");
  const replay = document.querySelector(".restart");
  replay.addEventListener("click", function() {
    restartGame();
  });
  for (cell of cells) {
    cell.addEventListener("click", function() {
      playerMove(this.id);
      updateHeader();
      isGameOver();
    });
  }
}

function playerMove(idValue) {
  const spotChosen = document.getElementById(idValue);
  if (currPlayer % 2 === 0) {
    spotChosen.innerHTML = "X";
    spotChosen.style.pointerEvents = "none";
    const row = Math.floor(idValue / 3);
    const col = idValue % 3;
    currBoard[row][col] = 1;
  } else {
    spotChosen.innerHTML = "O";
    spotChosen.style.pointerEvents = "none";
    const row = Math.floor(idValue / 3);
    const col = idValue % 3;
    currBoard[row][col] = 2;
  }

  currPlayer++;
}

function updateHeader() {
  if (currPlayer % 2 === 0) {
    document.querySelector(".curr-player").textContent = "Player 1's Turn";
  } else {
    document.querySelector(".curr-player").textContent = "Player 2's Turn";
  }
}

function isGameOver() {
  let checkGame = 0;
  let tieGame = 0;
  if (currBoard[0][0] === 1 && currBoard[0][1] === 1 && currBoard[0][2] === 1) {
    document.querySelector(".curr-player").textContent = "Player 1 Wins!";
    document.getElementById(0).style.backgroundColor = "#FF3333";
    document.getElementById(1).style.backgroundColor = "#FF3333";
    document.getElementById(2).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[1][0] === 1 && currBoard[1][1] === 1 && currBoard[1][2] === 1) {
    document.querySelector(".curr-player").textContent = "Player 1 Wins!";
    document.getElementById(3).style.backgroundColor = "#FF3333";
    document.getElementById(4).style.backgroundColor = "#FF3333";
    document.getElementById(5).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[2][0] === 1 && currBoard[2][1] === 1 && currBoard[2][2] === 1) {
    document.querySelector(".curr-player").textContent = "Player 1 Wins!";
    document.getElementById(6).style.backgroundColor = "#FF3333";
    document.getElementById(7).style.backgroundColor = "#FF3333";
    document.getElementById(8).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[0][0] === 1 && currBoard[1][0] === 1 && currBoard[2][0] === 1) {
    document.querySelector(".curr-player").textContent = "Player 1 Wins!";
    document.getElementById(0).style.backgroundColor = "#FF3333";
    document.getElementById(3).style.backgroundColor = "#FF3333";
    document.getElementById(6).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[0][1] === 1 && currBoard[1][1] === 1 && currBoard[2][1] === 1) {
    document.querySelector(".curr-player").textContent = "Player 1 Wins!";
    document.getElementById(1).style.backgroundColor = "#FF3333";
    document.getElementById(4).style.backgroundColor = "#FF3333";
    document.getElementById(7).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[0][2] === 1 && currBoard[1][2] === 1 && currBoard[2][2] === 1) {
    document.querySelector(".curr-player").textContent = "Player 1 Wins!";
    document.getElementById(2).style.backgroundColor = "#FF3333";
    document.getElementById(5).style.backgroundColor = "#FF3333";
    document.getElementById(8).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[0][0] === 1 && currBoard[1][1] === 1 && currBoard[2][2] === 1) {
    document.querySelector(".curr-player").textContent = "Player 1 Wins!";
    document.getElementById(0).style.backgroundColor = "#FF3333";
    document.getElementById(4).style.backgroundColor = "#FF3333";
    document.getElementById(8).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[0][2] === 1 && currBoard[1][1] === 1 && currBoard[2][0] === 1) {
    document.querySelector(".curr-player").textContent = "Player 1 Wins!";
    document.getElementById(2).style.backgroundColor = "#FF3333";
    document.getElementById(4).style.backgroundColor = "#FF3333";
    document.getElementById(6).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }

  if (currBoard[0][0] === 2 && currBoard[0][1] === 2 && currBoard[0][2] === 2) {
    document.querySelector(".curr-player").textContent = "Player 2 Wins!";
    document.getElementById(0).style.backgroundColor = "#FF3333";
    document.getElementById(1).style.backgroundColor = "#FF3333";
    document.getElementById(2).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[1][0] === 2 && currBoard[1][1] === 2 && currBoard[1][2] === 2) {
    document.querySelector(".curr-player").textContent = "Player 2 Wins!";
    document.getElementById(3).style.backgroundColor = "#FF3333";
    document.getElementById(4).style.backgroundColor = "#FF3333";
    document.getElementById(5).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[2][0] === 2 && currBoard[2][1] === 2 && currBoard[2][2] === 2) {
    document.querySelector(".curr-player").textContent = "Player 2 Wins!";
    document.getElementById(6).style.backgroundColor = "#FF3333";
    document.getElementById(7).style.backgroundColor = "#FF3333";
    document.getElementById(8).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }

  if (currBoard[0][0] === 2 && currBoard[1][0] === 2 && currBoard[2][0] === 2) {
    document.querySelector(".curr-player").textContent = "Player 2 Wins!";
    document.getElementById(0).style.backgroundColor = "#FF3333";
    document.getElementById(3).style.backgroundColor = "#FF3333";
    document.getElementById(6).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[0][1] === 2 && currBoard[1][1] === 2 && currBoard[2][1] === 2) {
    document.querySelector(".curr-player").textContent = "Player 2 Wins!";
    document.getElementById(1).style.backgroundColor = "#FF3333";
    document.getElementById(4).style.backgroundColor = "#FF3333";
    document.getElementById(7).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[0][2] === 2 && currBoard[1][2] === 2 && currBoard[2][2] === 2) {
    document.querySelector(".curr-player").textContent = "Player 2 Wins!";
    document.getElementById(2).style.backgroundColor = "#FF3333";
    document.getElementById(5).style.backgroundColor = "#FF3333";
    document.getElementById(8).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[0][0] === 2 && currBoard[1][1] === 2 && currBoard[2][2] === 2) {
    document.querySelector(".curr-player").textContent = "Player 2 Wins!";
    document.getElementById(0).style.backgroundColor = "#FF3333";
    document.getElementById(4).style.backgroundColor = "#FF3333";
    document.getElementById(8).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }
  if (currBoard[0][2] === 2 && currBoard[1][1] === 2 && currBoard[2][0] === 2) {
    document.querySelector(".curr-player").textContent = "Player 2 Wins!";
    document.getElementById(2).style.backgroundColor = "#FF3333";
    document.getElementById(4).style.backgroundColor = "#FF3333";
    document.getElementById(6).style.backgroundColor = "#FF3333";
    checkGame = 1;
  }

  if (checkGame === 1) {
    const cells = document.querySelectorAll(".cell");
    for (cell of cells) {
      cell.style.pointerEvents = "none";
    }
    return;
  }

  for (var i = 0; i < currBoard.length; i++) {
    for (var j = 0; j < currBoard[i].length; j++) {
      if (currBoard[i][j] === 0) {
        tieGame = 1;
      }
    }
  }

  if (tieGame === 0) {
    document.querySelector(".curr-player").textContent = "Tie Game!";
  }
}

function restartGame() {
  currPlayer = 2;
  currBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  document.querySelector(".curr-player").textContent = "Player 1's Turn";
  const cells = document.querySelectorAll(".cell");
  for (cell of cells) {
    cell.innerHTML = "";
    cell.style.pointerEvents = "all";
    cell.style.backgroundColor = "";
  }
}


playGame();
