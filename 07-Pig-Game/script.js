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



const switchPlayer = () => {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
};
let scores, currentScore, activePlayer, playing;

const init = () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    dice.classList.add("hidden");
};
init();
btnRoll.addEventListener("click", function () {
    if (playing) {
        const number = Math.trunc(Math.random() * 6 + 1);
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
    if (playing) {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            dice.classList.add("hidden");
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else {
            switchPlayer();
        }
    }
});
btnNew.addEventListener('click', init); 