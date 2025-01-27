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

  if (humanChoice === computerChoice) {
    const tieDiv = document.createElement("div");
    tieDiv.textContent = "This is a tie round!";
    container.appendChild(tieDiv);
  } 
  else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore++;
    const playerWinDiv = document.createElement("div");
    playerWinDiv.textContent = "You win this round!";
    container.appendChild(playerWinDiv);
  } 
  else {
    computerScore++;
    const computerWinDiv = document.createElement("div");
    computerWinDiv.textContent = "You lose this round!";
    container.appendChild(computerWinDiv);
  }

  div.textContent = "Your Choice: " + humanChoice;
  div1.textContent = "Computer Choice: " + computerChoice;
  div2.textContent = "Scores - Your Score: " + humanScore + ", Computer Score: " + computerScore;

  container.appendChild(div);
  container.appendChild(div1);
  container.appendChild(div2);

  if (computerScore === 3 || humanScore === 3) {
    const div3 = document.createElement("div");
    if (humanScore === 3) {
      div3.textContent = "You Win The Game!";
    }
    else if (computerScore === 3) {
      div3.textContent = "Computer Win The Game!";
    }
    container.appendChild(div3);
    disableGame();
  }
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
