const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const roll = Math.floor(Math.random() * 3);
  return choices[roll];
}

function getHumanChoice() {
  const player = prompt(("Choose either: ROCK, PAPER, or SCISSORS"), "");
  player = toLowerCase(player);
  if (checkInput(player)) {
    alert(`You chose ${player}`);
  }
  else {
    alert(`Please put in correct input`);
  }
}

function checkInput(input) {
  let valid = false;
  for (choice of choices) {
    if (input === choice) {
      valid = true;
    }
  }
  return true;
}
