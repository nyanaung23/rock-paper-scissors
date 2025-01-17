function getComputerChoice() {
  let random_num = Math.floor(Math.random() * 3);
  let comp_choice;
  if (random_num == 0) {
    comp_choice = "rock";
  }
  else if (random_num == 1) {
    comp_choice = "paper";
  }
  else {
    comp_choice = "scissor";
  }

  return comp_choice;
}

function getHumanChoice() {
  let player_choice = prompt("Make your Choice. Rock = 0, paper = 1, or scissor = 2");
  
  if (player_choice == 0){
    return "rock";
  }
  else if (player_choice == 1) {
    return "paper";
  }
  else if (player_choice == 2) {
    return "scissor";
  }
  else{
    alert("Invalid Choice!");
    getHumanChoice();
  }
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice){

  let result;

  if (humanChoice == "rock" && computerChoice == "rock"){
    result = "It's a tie";
  }
  else if (humanChoice == "paper" && computerChoice == "paper"){
    result = "It's a tie";
  }
  else if (humanChoice == "scissor" && computerChoice == "scissor"){
     result = "It's a tie";
  }
  else if (humanChoice == "rock" && computerChoice == "scissor"){
    result = "You Win!";
  }
  else if (humanChoice == "scissor" && computerChoice == "rock"){
    result = "You Lose!";
  }
  else if (humanChoice == "paper" && computerChoice == "rock"){
    result = "You Win!";
  }
  else if (humanChoice == "rock" && computerChoice == "paper"){
    result = "You Lose!";
  }
  else if (humanChoice == "scissor" && computerChoice == "paper"){
    result = "You Win!";
  }
  else if (humanChoice == "paper" && computerChoice == "scissor"){
    result = "You Lose!";
  }

  console.log ("Your Choice: " , humanChoice);

  console.log ("Computer Choice: " , computerChoice);

  console.log (result);
}

function playGame(rounds) {
  for (let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection); 
  }
}

console.log("Welcome to the game!");

playGame(2);