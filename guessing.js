
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secret = 37;
const maxAttempts = 5;
let attempts = 0;
let won = false;

function askGuess() {
    rl.question("Enter your guess (1-100): ", (input) => {
        // Invalid input does not consume an attempt
        if (input.trim() === "" || !Number.isFinite(Number(input))) {
            console.log("Please enter a valid number.");
            askGuess();
            return;
        }

        const guess = Number(input);

        if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
            console.log("Enter a whole number from 1 to 100.");
            askGuess();
            return;
        }

        attempts++;

        if (guess === secret) {
            console.log(`Guess ${attempts}: ${guess} → Correct!`);
            won = true;
            breakGame();
            return;
        } else if (guess > secret) {
            console.log(`Guess ${attempts}: ${guess} → Too high`);
        } else {
            console.log(`Guess ${attempts}: ${guess} → Too low`);
        }

        if (attempts >= maxAttempts) {
            console.log(`Game over! The secret number was ${secret}.`);
            rl.close();
            return;
        }

        askGuess();
    });
}

function breakGame() {
    // Ends the game immediately after a correct guess
    rl.close();
}

askGuess();
