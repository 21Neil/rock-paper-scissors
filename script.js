function computerPlay() {
  random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Rock";
  } else if (random === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (computerSelection === "Rock" &&
      playerSelection.toUpperCase() === "ROCK") ||
    (computerSelection === "Paper" &&
      playerSelection.toUpperCase() === "PAPER") ||
    (computerSelection === "Scissors" &&
      playerSelection.toUpperCase() === "SCISSORS")
  ) {
    return "It's tie!";
  } else if (
    (computerSelection === "Rock" &&
      playerSelection.toUpperCase() === "SCISSORS") ||
    (computerSelection === "Paper" &&
      playerSelection.toUpperCase() === "ROCK") ||
    (computerSelection === "Scissors" &&
      playerSelection.toUpperCase() === "PAPER")
  ) {
    return `You Loss! ${computerSelection} beats ${playerSelection
      .toLowerCase()
      .replace(
        playerSelection[0].toLowerCase(),
        playerSelection[0].toUpperCase()
      )}`;
  } else {
    return `You Win! ${playerSelection
      .toLowerCase()
      .replace(
        playerSelection[0].toLowerCase(),
        playerSelection[0].toUpperCase()
      )} beats ${computerSelection}`;
  }
}

const allBtn = document.querySelectorAll(".rps-container > button");
const divResult = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore")
const gameOver = document.querySelector('.game-over')
const restartBtn = document.createElement('button');
restartBtn.textContent = 'Restart';
restartBtn.classList.add('restart-btn')
const container = document.querySelector('.container')
let playerPoint = 0;
let computerPoint = 0;

allBtn.forEach((btn) => {
  btn.addEventListener("click", game);
});
restartBtn.addEventListener("click", restart)

function game(e) {
  const playerSelection = e.path[0].value;
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  divResult.textContent = result;
  counterPoint(result);
  playerScore.textContent = `You: ${playerPoint}`
  computerScore.textContent =  `Computer: ${computerPoint}`;
  judge();
}

function counterPoint(result) {
  if (result.includes("Win") === true) {
    playerPoint += 1;
  } else if (result.includes("Loss") === true) {
    computerPoint += 1;
  }
}

function judge() {
  if (playerPoint === 5) {
    gameOver.setAttribute('style', 'color: green')
    gameOver.textContent = 'Game Over!\r\nYou lucky star!';
    gameOverHandler()
  } else if (computerPoint === 5){
    gameOver.setAttribute('style', 'color: red')
    gameOver.textContent = 'Game Over!\r\nWish you have good luck next time';
    gameOverHandler()
  }
}

function gameOverHandler() {
  allBtn.forEach((btn) => {
    btn.removeEventListener("click", game);
  });
  container.appendChild(restartBtn)
}

function restart() {
  playerPoint = 0;
  computerPoint = 0;
  playerScore.textContent = ''
  computerScore.textContent =  '';
  divResult.textContent = '';
  gameOver.textContent = '';
  allBtn.forEach((btn) => {
    btn.addEventListener("click", game);
  });
  container.removeChild(restartBtn)
}