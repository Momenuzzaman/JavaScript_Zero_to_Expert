// selecting Elements 
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const currentScore0 = document.querySelector("#current--0");
const score1 = document.querySelector("#score--1");
const currentScore1 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// stating condition
const playing = true;
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

const switchPlayer = () => {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
};

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
btnRoll.addEventListener("click", function () {
    if (playing) {
        const number = Math.round(Math.random() * 6 + 1);
        dice.classList.remove("hidden");
        dice.src = `dice-${number}.png`;

        if (number !== 1) {
            currentScore += number;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
            // currentScore0.textContent = currentScore;
        }
        else {
            switchPlayer();
        }
    }
});
btnHold.addEventListener("click", function () {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 20) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else {
        switchPlayer();
    }


});