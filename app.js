let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const items = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * items.length);
  return items[randomNumber].toLowerCase();
}

function gameRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay().toLowerCase();

  if (playerSelection === computerSelection) {
    playerScore++;
    computerScore++;
    return `It's a tie`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `Player wins`;
  } else {
    computerScore++;
    return `Computer wins`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      `Choose your weapon: Rock, Paper or Scissors`
    );
    const computerSelection = computerPlay();
    console.log(gameRound(playerSelection, computerSelection));
    console.log(`PlayerScore: ${playerScore}, ComputerScore: ${computerScore}`);
  }
}

game();
