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
      .replace(playerSelection[0], playerSelection[0].toUpperCase())}`;
  } else {
    return `You Win! ${playerSelection
      .toLowerCase()
      .replace(
        playerSelection[0],
        playerSelection[0].toUpperCase()
      )} beats ${computerSelection}`;
  }
}

function game() {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, Scissors");
    console.log(playerSelection)
    const computerSelection = computerPlay();
    console.log(computerSelection)
    const result = playRound(playerSelection, computerSelection)
    console.log(result);
    if (result.includes('Win') === true){
        counter += 1;
    }
    console.log(`You win ${counter} time`)
  }
}

game()