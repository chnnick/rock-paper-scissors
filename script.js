const choices = ["rock", "paper", "scissors"];
let computer = getComputerChoice();
let human = getHumanChoice();
console.log(computer);
console.log(human);


function getComputerChoice() {
  const roll = Math.floor(Math.random() * 3);
  return choices[roll];
}

function getHumanChoice() {
  const player = prompt(("Choose either: ROCK, PAPER, or SCISSORS"), "");
  console.log(player);
  player.toLowerCase();
  console.log(player);
  if (checkInput(player)) {
    return player;
  }
  else {
    alert(`Please put in correct input`);
    getHumanChoice();
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
