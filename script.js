const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");
const scoreboard = document.getElementById("scoreboard");
const cScore = document.getElementById("computer-score");
const hScore = document.getElementById("human-score");

function getComputerChoice() {
  const roll = Math.floor(Math.random() * 3);
  return choices[roll];
}

rockButton.addEventListener("click", () => {
  playRound("rock", computerChoice);
})

paperButton.addEventListener("click", () => {
  playRound("paper", computerChoice);
})

scissorsButton.addEventListener("click", () => {
  playRound("scissors", computerChoice);
})

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock" : 
      if (computerChoice === humanChoice) {
        humanScore++;
        computerScore++;
        updateScores();
        displayMsg(`You Tie! You both chose <span class="result-style">${humanChoice}<span>`);
      }
      else if (computerChoice === "paper") {
        computerScore++;
        updateScores();
        displayMsg(`You Lose... Computer chose <span class="lose-style">Paper</span>`);
      }
      else {
        humanScore++;
        updateScores();
        displayMsg(`You Win! You chose <span class="win-style">${humanChoice}</span>, which beats <span class="lose-style">${computerChoice}</span>!`);
      }
    case "paper" : 
      if (computerChoice === humanChoice) {
        humanScore++;
        computerScore++;
        updateScores();
        displayMsg(`You Tie! You both chose <span class="result-style">${humanChoice}<span>`);
      }
      else if (computerChoice === "scissors") {
        computerScore++;
        updateScores();
        displayMsg(`You Lose... Computer chose <span class="lose-style">Scissors</span>`);
      }
      else {
        humanScore++;
        updateScores();
        displayMsg(`You Win! You chose <span class="win-style">${humanChoice}</span>, which beats <span class="lose-style">${computerChoice}</span>!`);
      }
    case "scissors" : 
      if (computerChoice === humanChoice) {
        humanScore++;
        computerScore++;
        updateScores();
        displayMsg(`You Tie! You both chose <span class="result-style">${humanChoice}<span>`);
      }
      else if (computerChoice === "rock") {
        computerScore++;
        updateScores();
        displayMsg(`You Lose... Computer chose <span class="lose-style">${computerChoice}</span>`);
      }
      else {
        humanScore++;
        updateScores();
        displayMsg(`You Win! You chose <span class="win-style">${humanChoice}</span>, which beats <span class="lose-style">${computerChoice}</span>!`);
      }
  }
}

function updateScores() {
  hScore.innerText = `Player: ${humanScore}`;
  cScore.innerText = `Computer: ${computerScore}`;
}

function displayMsg(message) {
  const resultMsg = document.createElement("h1");
  resultMsg.innerHTML = message;
  resultMsg.style = "color: yellow; font-family: Impact";
  scoreboard.appendChild(resultMsg);
}
