// document.querySelector(".number").textContent = 20;
// console.log(document.querySelector(".number").textContent = 20);

// document.querySelector(".guess").value = 10;
// console.log(document.querySelector(".guess").value);

// document.querySelector(".message").textContent = "Correct Number";
// console.log(document.querySelector(".message").textContent);

let guessNumber = Math.round(Math.random() * 20);
console.log(guessNumber);

let displayScore = 20;
let highScore = 0;

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

        if (displayScore > highScore) {
            highScore = displayScore;
            document.querySelector(".highscore").textContent = highScore;
        }
    }
    // When guess Number to High
    else if (guess > guessNumber) {
        if (displayScore > 1) {
            document.querySelector(".message").textContent = "Too High";
            displayScore--;
            document.querySelector(".score").textContent = displayScore;
        }
        else {
            document.querySelector(".message").textContent = "Lose the game";
            displayScore--;
            document.querySelector(".score").textContent = 0;
        }
    }
    // When guess Number to Low
    else if (guess < guessNumber) {
        if (displayScore > 1) {
            document.querySelector(".message").textContent = "Too Low";
            displayScore--;
            document.querySelector(".score").textContent = displayScore;
        }
        else {
            document.querySelector(".message").textContent = "Lose the game";
            displayScore--;
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    guessNumber = Math.round(Math.random() * 20);
    console.log(guessNumber);
    document.querySelector(".guess").value = '';
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    displayScore = 20;
    document.querySelector(".score").textContent = displayScore;
    document.querySelector("body").style.backgroundColor = "#222";
});