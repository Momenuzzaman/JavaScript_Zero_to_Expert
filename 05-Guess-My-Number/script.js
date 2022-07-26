// document.querySelector(".number").textContent = 20;
// console.log(document.querySelector(".number").textContent = 20);

// document.querySelector(".guess").value = 10;
// console.log(document.querySelector(".guess").value);

// document.querySelector(".message").textContent = "Correct Number";
// console.log(document.querySelector(".message").textContent);

const guessNumber = Math.round(Math.random() * 20);
console.log(guessNumber);
document.querySelector(".number").textContent = guessNumber;
const score = document.querySelector(".score");
let displayScore = 20;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "Not a number";
    }
    else if (guess === guessNumber) {
        document.querySelector(".message").textContent = "Correct Number";
    }
    else if (guess > guessNumber) {
        document.querySelector(".message").textContent = "Too High";
        displayScore--;
    }
    else if (guess < guessNumber) {
        document.querySelector(".message").textContent = "Too Low";
        displayScore--;
    }
});