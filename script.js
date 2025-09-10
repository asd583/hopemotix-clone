// script.js

document.getElementById('generate2D').addEventListener('click', generate2D);
document.getElementById('generate3D').addEventListener('click', generate3D);

function generate2D() {
    const number = Math.floor(Math.random() * 90) + 10; // Generates a number between 10 and 99
    displayResult(number);
}

function generate3D() {
    const number = Math.floor(Math.random() * 900) + 100; // Generates a number between 100 and 999
    displayResult(number);
}

function displayResult(number) {
    document.getElementById('lotteryNumber').innerHTML = number;
}