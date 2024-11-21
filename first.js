const cells = document.querySelectorAll(".cell");
const winnerMessage = document.getElementById("winnerMessage");
const winnerText = document.getElementById("winnerText");
const restartButton = document.getElementById("restartButton");

let currplayer = "X"; 
let board = ["", "", "", "", "", "", "", "", ""]; 


const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell, i) => {
  cell.addEventListener("click", () => handleClick(cell, i));
});

function handleClick(cell, i) {
  
  if (board[i] === "") {
    board[i] = currplayer; 
    cell.textContent = currplayer; 
    if (checkWin(currplayer)) {
       endGame(`${currplayer} Wins!`);
    } else if (board.every(cell => cell !== "")) {
       endGame("It's a Draw!");
    } else {
      
      currplayer = currplayer === "X" ? "O" : "X";
    }
  }
}

function checkWin(player) {

  return winningCombinations.some(combination =>
    combination.every(i => board[i] === player)
  );
}

function endGame(message) {
  winnerText.textContent = message;
  winnerMessage.classList.remove("hidden"); 
}

restartButton.addEventListener("click", () => {
  
  board = ["", "", "", "", "", "", "", "", ""];
  currplayer = "X";
  winnerMessage.classList.add("hidden");
  cells.forEach(cell => {
    cell.textContent = ""; 
  });
});
