const againButton = document.querySelector(".button-again");
const checkButton = document.getElementById("check-button");
const messageEl = document.getElementById("message");
const guessEl = document.querySelector("input");
const secretNumberEl = document.querySelector(".number");
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");
// Adding confetti
const canvas = document.querySelector("canvas");

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// Afisarea mesajului
function displayMessage(message) {
  messageEl.textContent = message;
}

// La apasarea Enter se verifica numarul introdus
guessEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    check();
  }
});

// La apasarea buttonului Check se verifica numarul introdus
checkButton.addEventListener("click", check);

// Compararea numarului introdus cu numarul ce trebuie ghicit
function check() {
  let guess = Number(guessEl.value);
  // if input is not between 1 and 20
  if (!guess || guess > 20 || guess < 1) {
    displayMessage("Incorect number entered!");
  }
  // Numarul introdus coincide cu numarul ce trebuie ghicit
  else if (guess === secretNumber) {
    secretNumberEl.textContent = secretNumber;
    displayMessage("Ai cistigat");
    document.body.style.backgroundColor = "green";
    // adding confetti
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  }
  // Numarul introdus difera de numarul ce trebuie ghicit
  else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high ⬆" : "Too low ⬇");
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage("YOU LOST the game");
      document.body.style.backgroundColor = "red";
      scoreEl.textContent = "0";
    }
  }
}

// Jocul de la inceput
againButton.addEventListener("click", (event) => {
  score = 20;
  scoreEl.textContent = score;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.body.style.backgroundColor = "";
  guessEl.value = "";
  secretNumberEl.textContent = "?";
});
