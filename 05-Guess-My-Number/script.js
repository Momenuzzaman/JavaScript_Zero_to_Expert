// document.querySelector(".number").textContent = 20;
// console.log(document.querySelector(".number").textContent = 20);

// document.querySelector(".guess").value = 10;
// console.log(document.querySelector(".guess").value);

// document.querySelector(".message").textContent = "Correct Number";
// console.log(document.querySelector(".message").textContent);

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "Not a valid number";
    }
});