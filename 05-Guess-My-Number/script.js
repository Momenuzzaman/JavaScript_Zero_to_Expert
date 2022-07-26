// document.querySelector(".number").textContent = 20;
// console.log(document.querySelector(".number").textContent = 20);

// document.querySelector(".guess").value = 10;
// console.log(document.querySelector(".guess").value);

// document.querySelector(".message").textContent = "Correct Number";
// console.log(document.querySelector(".message").textContent);

let guessNumber = Math.round(Math.random() * 20);
console.log(guessNumber);

const score = document.querySelector(".score");
let displayScore = 20;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    //  When there is no number
    if (!guess) {
        document.querySelector(".message").textContent = "Not a number";
    }
    // When player win
    else if (guess === guessNumber) {
        document.querySelector(".message").textContent = "Correct Number";

        document.querySelector(".number").textContent = guessNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
    }
    // When guess Number to High
    else if (guess > guessNumber) {
        if (displayScore > 1) {
            document.querySelector(".message").textContent = "Too High";
            displayScore--;
            score.textContent = displayScore;
        }
        else {
            document.querySelector(".message").textContent = "Lose the game";
            displayScore--;
            score.textContent = 0;
        }
    }
    // When guess Number to Low
    else if (guess < guessNumber) {
        if (displayScore > 1) {
            document.querySelector(".message").textContent = "Too Low";
            displayScore--;
            score.textContent = displayScore;
        }
        else {
            document.querySelector(".message").textContent = "Lose the game";
            displayScore--;
            score.textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    guessNumber = Math.round(Math.random() * 20);
    console.log(guessNumber);
    document.querySelector(".guess").value = '';
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    let displayScore = 20;
    score.textContent = displayScore;
    document.querySelector("body").style.backgroundColor = "#222";
});