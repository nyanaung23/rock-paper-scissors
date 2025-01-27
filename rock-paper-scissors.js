let humanScore = 0, computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  const container = document.querySelector("#container");
  container.innerHTML = ""; 
  
  const div = document.createElement("div");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");

  let resultMessage;
  if (humanChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage = "You win!";
  } else {
    computerScore++;
    resultMessage = "You lose!";
  }

  div.textContent = "Your Choice: " + humanChoice;
  div1.textContent = "Computer Choice: " + computerChoice;
  div2.textContent = "Scores - Your Score: " + humanScore + ", Computer Score: " + computerScore;

  container.appendChild(div);
  container.appendChild(div1);
  container.appendChild(div2);

  if (computerScore == 5 || playerScore == 5) {
    const div3 = document.createElement("div");
    if (playerScore == 5) {
      div3.textContent = "You Win!";
    }
    else if (playerScore == 5) {
      div3.textContent = "Computer Win!";
    }
  }
  container.appendChild(div3);
  disableGame();
}

function setupEventListeners() {
  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorBtn = document.querySelector("#scissor");

  rockBtn.addEventListener("click", () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });

  paperBtn.addEventListener("click", () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });

  scissorBtn.addEventListener("click", () => {
    const humanChoice = "scissor";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
}

function disableGame() {
  document.querySelector("#rock").disabled = true;
  document.querySelector("#paper").disabled = true;
  document.querySelector("#scissor").disabled = true;
}

setupEventListeners();
