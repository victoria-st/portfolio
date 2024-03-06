// Elements
const player_0El = document.querySelector(".player--0");
const player_1El = document.querySelector(".player--1");
const score_0El = document.querySelector("#score--0");
const score_1El = document.getElementById("score--1");
const current_0El = document.getElementById("current--0");
const current_1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");

const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

// Variables
let score, currentScore, currentPlayer, clicks;

// Initial conditions
function init() {
  score_0El.textContent = 0;
  score_1El.textContent = 0;
  current_0El.textContent = 0;
  current_1El.textContent = 0;
  score = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  clicks = 0;
  player_0El.classList.remove("player--winner");
  player_1El.classList.remove("player--winner", "player--active");
  player_0El.classList.add("player--active");
  rollDiceBtn.classList.remove("hidden");
  holdBtn.classList.remove("hidden");
}

init();

function switchPLayer() {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer == 1 ? (currentPlayer = 0) : (currentPlayer = 1);
  player_0El.classList.toggle("player--active");
  player_1El.classList.toggle("player--active");
  clicks = 0;
}

function addScore() {
  // Current score is added to the player's score
  score[currentPlayer] += currentScore;
  document.getElementById(`score--${currentPlayer}`).textContent =
    score[currentPlayer];

  // Checking if the player wins (score >= 20)
  if (score[currentPlayer] >= 20) {
    // The winner is marked, the game ends
    document.querySelector(".player--active").classList.add("player--winner");
    // Hiding the Dice element, the Roll and Hold buttons
    diceEl.classList.add("hidden");
    rollDiceBtn.classList.add("hidden");
    holdBtn.classList.add("hidden");
  } else {
    switchPLayer();
  }
}

// Roll dice
rollDiceBtn.addEventListener("click", function () {
  // A random number is generated, the corresponding image is displayed
  clicks++;
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove("hidden");

  // The player is changed, if the random number is 1
  if (dice === 1) {
    switchPLayer();
  } // The player has 3 tries to roll the dice
  else if (clicks > 2) {
    currentScore += dice;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
    addScore();
  } else {
    currentScore += dice;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  }
});

holdBtn.addEventListener("click", addScore);
newGameBtn.addEventListener("click", init);
