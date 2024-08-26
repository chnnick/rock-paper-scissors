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

playGame();

