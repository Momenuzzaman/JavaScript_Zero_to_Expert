// selecting Elements 
const player0 = document.querySelector(".player player--0");
const player1 = document.querySelector(".player player--1");
const score0 = document.querySelector("#score--0");
const currentScore0 = document.querySelector("#current--0");
const score1 = document.querySelector("#score--1");
const currentScore1 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// stating condition

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
btnRoll.addEventListener("click", function () {
    const number = Math.round(Math.random() * 6 + 1);
    dice.classList.remove("hidden");
    dice.src = `dice-${number}.png`;

    if (number !== 1) {
        currentScore += number;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        // currentScore0.textContent = currentScore;
    }
    else {
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;

    }
});