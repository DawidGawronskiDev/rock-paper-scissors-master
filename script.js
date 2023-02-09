// possible options
const choiceOptions = document.querySelectorAll(".choice-option");
// checks if you can play
let gameBoolean = true;
// your score
let points = 0;
let score = document.querySelector("#score");
// player choice (step 2)
let gamePlayerChoice = document.querySelector("#game-player-choice");
// computer choice (step 2)
let gameComputerChoice = document.querySelector("#game-computer-choice");
// player icon (step 2)
let playerIcon = document.querySelector("#game-player-choice-icon");
// computer icon (step 2)
let computerIcon = document.querySelector("#game-computer-choice-icon");
// result of the game (step 2)
let gameResult = document.querySelector("#game-result");
// result container (step 2)
let gameResultContainer = document.querySelector("#game-result-container");
// result (step 3)
let result;
// table of all posibilities
const gameArr = ["spock", "scissors", "paper", "rock", "lizard"];

let playerChoice;
let computerChoice;

// STEP 1
/* 
User can choose what to play.
After choosing his choice is saved
and computer picks random option
*/

choiceOptions.forEach((choice) =>
  choice.addEventListener("click", function () {
    if (gameBoolean == true) {
      playerChoice = gameArr.indexOf(choice.classList[1]);
      computerChoiceFunction();

      gameFunction();
      setTimeout(gameResultFunction, 2000);
      console.log(`Your Choice: ${gameArr[playerChoice]}`);
      console.log(`Computer Choice: ${gameArr[computerChoice]}`);

      gameBoolean = false;
    }
  })
);

// STEP 2
/* 
You can see your chocie and have
to wait for computer choice
(for example 3s)
after some time you can see both options
*/

function gameFunction() {
  playerIcon.src = `./images/icon-${gameArr[playerChoice]}.svg`;
  gamePlayerChoice.classList = `${gameArr[playerChoice]}`;

  setTimeout(function () {
    computerIcon.src = `./images/icon-${gameArr[computerChoice]}.svg`;
    gameComputerChoice.classList = `${gameArr[computerChoice]}`;
  }, 1000);

  document
    .querySelector(".player-choice-container")
    .classList.toggle("display-none");

  document.querySelector(".game-container").classList.toggle("display-none");
}

// STEP 3
/* 
container on the middle appears
winner is shown
you win is shown
score gets updated
*/

function gameResultFunction() {
  let u = playerChoice;
  let y = playerChoice;

  u == computerChoice ? (result = "DRAW!") : checkWinner();

  function checkWinner() {
    for (let i = 0; i < 1; i++) {
      u++;
      if (u == gameArr.length) {
        u = 0;
      }
    }
    for (let i = 0; i < 3; i++) {
      y++;
      if (y == gameArr.length) {
        y = 0;
      }
    }
    if (u == computerChoice || y == computerChoice) {
      result = "YOU WIN!";
      points++;
    } else {
      result = "YOU LOSE!";
      points--;
    }
    score.textContent = points;
  }

  gameResult.textContent = result;

  let playAgain = document.createElement("button");
  playAgain.id = "play-again-button";
  playAgain.classList = "play-again-button";
  playAgain.textContent = "PLAY AGAIN";
  gameResultContainer.appendChild(playAgain);
  playAgain.addEventListener("click", function () {
    startSetup();
    document.querySelector("#play-again-button").remove();
  });
}

// STEP 4
/*
You can play again.
your choice and computer choice
is undefined till you choose.
*/

function playAgain() {}

function startSetup() {
  playerChoice = "";
  computerChoice = "";
  gamePlayerChoice.src = "";
  gameComputerChoice.src = "";
  gameComputerChoice.classList = "";
  gameResult.textContent = "";
  computerIcon.src = "";
  gameBoolean = true;

  document
    .querySelector(".player-choice-container")
    .classList.toggle("display-none");

  document.querySelector(".game-container").classList.toggle("display-none");
}

function computerChoiceFunction() {
  computerChoice = Math.floor(Math.random() * 5);
}
