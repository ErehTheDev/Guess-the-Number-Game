const keyboardDiv = document.querySelector(".keyboard");
const hintText = document.querySelector(".hint-text");
let randomNumber = Math.floor(Math.random() * 10) + 1; // Usa "let" per poterlo aggiornare
const playAgainBtn = document.querySelector("#Restart");

// Create a div for the keyboard
for (let i = 1; i <= 10; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.classList.add("number-button");

    button.addEventListener("click", function () {
        checkGuess(i);
        button.disabled = true;
        button.classList.add("disabled-btn");
    });
    keyboardDiv.appendChild(button);
}

// Create a div for the hint text
function checkGuess(number) {
    if (number === randomNumber) {
        hintText.textContent = "Congratulations! You guessed the number!";
        hintText.style.color = "green";
        setTimeout(resetGame, 2000); // Riavvia il gioco dopo 2 secondi
    } else if (number < randomNumber) {
        hintText.textContent = "Too low! Try again.";
        hintText.style.color = "blue";
    } else {
        hintText.textContent = "Too high! Try again.";
        hintText.style.color = "red";
    }
}

// Funzione per resettare il gioco
function resetGame() {
    hintText.textContent = "";
    keyboardDiv.querySelectorAll("button").forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("disabled-btn");
    });
    randomNumber = Math.floor(Math.random() * 10) + 1; // Genera un nuovo numero casuale
    console.log(randomNumber); // Per scopi di debug
}

// Event listener per il pulsante Restart
playAgainBtn.addEventListener("click", resetGame);

console.log(randomNumber); // For debugging purposes