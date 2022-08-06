// selecting Elements 

const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// stating condition
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

btnRoll.addEventListener("click", function () {
    const number = Math.round(Math.random() * 6 + 1);
    dice.classList.remove("hidden");

});