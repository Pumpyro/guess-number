"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const again = document.querySelector(".again");
const message = document.querySelector(".message");
const highscore = document.querySelector(".highscore");
const score = document.querySelector(".score");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const number = document.querySelector(".number");

init();

function init() {
  again.addEventListener("click", function () {
    reset();
  });

  check.addEventListener("click", game);
}
function game() {
  const guessValue = Number(guess.value);

  if (!guessValue) {
    message.textContent = "No number!";
    return;
  }

  if (guessValue < 1 || guessValue > 20) {
    message.textContent = "Number must be between 1 and 20";
    return;
  }

  if (guessValue === secretNumber) {
    message.textContent = "Correct Number!";
    number.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    if (score.textContent > highscore.textContent) {
      highscore.textContent = score.textContent;
    }
    check.disabled = true;
  } else {
    message.textContent = guessValue > secretNumber ? "Too high!" : "Too low!";
    score.textContent--;
  }

  if (loseCheck()) {
    message.textContent = "You lost the game!";
    check.disabled = true;
    return;
  }
}

function reset() {
  number.style.width = "15rem";
  number.textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  guess.value = "";
  message.textContent = "Start guessing...";
  score.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  check.disabled = false;
}

function loseCheck() {
  return Number(score.textContent) === 0;
}

again.addEventListener("click", function () {
  reset();
});

check.addEventListener("click", game);
