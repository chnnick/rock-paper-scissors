const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const results = document.getElementById("game-results");
const cScore = document.getElementById("computerScore");
const hScore = document.getElementById("humanScore");
const replayButton = document.getElementById("play-again");

function getComputerChoice() {
  const roll = Math.floor(Math.random() * 3);
  return choices[roll];
}

function getHumanChoice() {
  let playerInput = prompt(("Choose either: ROCK, PAPER, or SCISSORS"));
  let player = playerInput.toLowerCase();
  if (checkInput(player)) {
    return player;
  }
  else {
    alert(`Please put in correct input`);
    return getHumanChoice();
  }
}

function checkInput(input) {
  let valid = false;
  for (const choice of choices) {
    if (choice === input) {
      valid = true;
    }
  }
  return valid;
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock" : 
      if (computerChoice === "rock") {
        humanScore++;
        computerScore++;
        return `You Tie! You both chose <span class="result-style">Rock<span>`;
      }
      else if (computerChoice === "paper") {
        computerScore++;
        return `You Lose... Computer chose <span class="lose-style">Paper</span>`;
      }
      else {
        humanScore++;
        return `You Win! You chose <span class="win-style">Rock</span>, which beats <span class="lose-style">Paper</span>!`;
      }
    case "paper" : 
      if (computerChoice === "paper") {
        humanScore++;
        computerScore++;
        return `You Tie! You both chose <span class="result-style">Paper<span>`;
      }
      else if (computerChoice === "scissors") {
        computerScore++;
        return `You Lose... Computer chose <span class="lose-style">Scissors</span>`;
      }
      else {
        humanScore++;
        return `You Win! You chose <span class="win-style">Paper</span>, which beats <span class="lose-style">rock</span>!`;
      }
    case "scissors" : 
      if (computerChoice === "scissors") {
        humanScore++;
        computerScore++;
        return `You Tie! You both chose <span class="result-style">Scissors<span>`;
      }
      else if (computerChoice === "rock") {
        computerScore++;
        return `You Lose... Computer chose <span class="lose-style">Rock</span>`;
      }
      else {
        humanScore++;
        return `You Win! You chose <span class="win-style">Scissors</span>, which beats <span class="lose-style">Paper</span>!`;
      }
  }
}

playGame();

function playGame() {
  let humanChoice = "";
  let computerChoice = "";
  results.innerText = "Choose an option. Rock, Paper, or Scissors";
  for (let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(humanChoice);
    console.log(computerChoice);
    let resultText = playRound(humanChoice, computerChoice);
    console.log(resultText);
    results.innerHTML = resultText;
  }
}

