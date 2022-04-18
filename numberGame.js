"use strict";

let score = 20;
let highScore = 0;
document.querySelector(".number").textContent = "?";
let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".score").textContent = "20";
document.querySelector(".guess").value = "";
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    if (!guess) {
        document.querySelector(".message").textContent = "No Number! 🛑"
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number!🎉";
        score += 5;
        document.querySelector('.score').textContent = score;
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High! 👆';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game Over! 💀';
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low! 👇';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "Game Over! 💀";
        }
    }
});
document.querySelector(".again").addEventListener("click", function () {
    document.querySelector(".message").textContent = "🎉 Start Guessing!";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    let secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
