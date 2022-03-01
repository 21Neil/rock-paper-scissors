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

const allBtn = document.querySelectorAll("button");
const divResult = document.querySelector(".result");
let playerPoint = 0;
let computerPoint = 0;

allBtn.forEach((btn) => {
  btn.addEventListener("click", game);
});

function game(e) {
  const playerSelection = e.path[0].value;
  console.log(playerSelection);
  const computerSelection = computerPlay();
  console.log(computerSelection);
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
  divResult.textContent = result;
  counterPoint(result);
  console.log(`You: ${playerPoint}\nComputer: ${computerPoint}`);
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
    console.log('game over')
  } else if (computerPoint === 5){
    console.log('game over')
  }
}