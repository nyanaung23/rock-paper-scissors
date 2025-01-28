let humanChoice1 = null; 
let humanChoice2 = null; 
let button1Clicked = false; 
let button2Clicked = false;
let humanScore1 = 0, humanScore2 = 0;

const submitBtn = document.querySelector("#submit");

function playRound(humanChoice1, humanChoice2) {
    const container = document.querySelector("#container");
    container.innerHTML = ""; 
    
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
  
    if (humanChoice1 === humanChoice2) {
      const tieDiv = document.createElement("div");
      tieDiv.textContent = "This is a tie round!";
      container.appendChild(tieDiv);
    } 
    else if (
      (humanChoice1 === "rock" && humanChoice2 === "scissor") ||
      (humanChoice1 === "paper" && humanChoice2 === "rock") ||
      (humanChoice1 === "scissor" && humanChoice2 === "paper")
    ) {
      humanScore1++;
      const player1WinDiv = document.createElement("div");
      player1WinDiv.textContent = "Player1 wins this round!";
      container.appendChild(player1WinDiv);
    } 
    else {
      humanScore2++;
      const player2WinDiv = document.createElement("div");
      player2WinDiv.textContent = "Player2 wins this round!";
      container.appendChild(player2WinDiv);
    }
  
    div.textContent = "Player1's Choice: " + humanChoice1;
    div1.textContent = "Player2's Choice: " + humanChoice2;
    div2.textContent = "Scores - Player1's Score: " + humanScore1 + ", Player2's Score: " + humanScore2;
  
    container.appendChild(div);
    container.appendChild(div1);
    container.appendChild(div2);
  
    if (humanScore1 === 3 || humanScore2 === 3) {
      const div3 = document.createElement("div");
      if (humanScore1 === 3) {
        div3.textContent = "PLayer1 Wins The Game!";
      }
      else if (humanScore2 === 3) {
        div3.textContent = "Player2 Wins The Game!";
      }
      container.appendChild(div3);
      disableGame();

      const restartBtn = document.createElement("button");
        restartBtn.textContent = "Play Again?";
        restartBtn.addEventListener("click", () => {
        window.location.reload();
        });

        container.appendChild(restartBtn);
    }
  }
  
  function setupEventListeners() {
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorBtn = document.querySelector("#scissor");
    const image = document.querySelector("#paperPic");

    const rockBtn2 = document.querySelector("#rock2");
    const paperBtn2 = document.querySelector("#paper2");
    const scissorBtn2 = document.querySelector("#scissor2");
    const image2 = document.querySelector("#paperPic2");

    rockBtn.addEventListener("click", () => {
        humanChoice1 = "rock";
        button1Clicked = true; 
        image.src = "./rps-images/rock.webp";
        checkConditions();
    });

    rockBtn2.addEventListener("click", () => {
        humanChoice2 = "rock";
        button2Clicked = true;
        image2.src = "./rps-images/rock.webp";
        checkConditions();
    });

    paperBtn.addEventListener("click", () => {
        humanChoice1 = "paper"
        button1Clicked = true;
        image.src = "./rps-images/paper.webp";
        checkConditions();
    });

    paperBtn2.addEventListener("click", () => {
        humanChoice2 = "paper";
        button2Clicked = true; 
        image2.src = "./rps-images/paper.webp";
        checkConditions();
    });

    scissorBtn.addEventListener("click", () => {
        humanChoice1 = "scissor";
        button1Clicked = true;
        image.src = "./rps-images/scissor.webp";
        checkConditions();
    });

    scissorBtn2.addEventListener("click", () => {
        humanChoice2 = "scissor";
        button2Clicked = true; 
        image2.src = "./rps-images/scissor.webp";
        checkConditions();
    });
  }

  function checkConditions(){
    if(button1Clicked && button2Clicked){
        submitBtn.addEventListener("click", handleSubmit);
    };
  };

  function handleSubmit(){
    if(humanChoice1 && humanChoice2){
        playRound(humanChoice1, humanChoice2);
        button1Clicked = false;
        button2Clicked = false;
    };
  };
  
  function disableGame() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissor").disabled = true;
  }
  
  setupEventListeners();