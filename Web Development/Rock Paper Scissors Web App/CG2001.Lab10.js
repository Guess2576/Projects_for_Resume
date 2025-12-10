const choices = ["rock", "paper", "scissors"];
const resultDisplay = document.getElementById("result");                                //Display results easily with getElementByID method: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

// Attach event listeners to buttons
document.getElementById("rock").addEventListener("click", () => play("rock"));          //Attach event listeners to the Rock, Paper, and Scissors buttons to capture the user's choice when clicked. (15%)
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));

function play(userChoice) {                                                             //Using Math.floor for computer randomization: https://www.geeksforgeeks.org/javascript-math-floor-method/
    const computerChoice = choices[Math.floor(Math.random() * 3)];                          //Using Math.random for computer randomization: https://www.w3schools.com/js/js_random.asp
    const result = pickWinner(userChoice, computerChoice);                               //Generate a random choice for the computer. (15%)
    displayResult(result, userChoice, computerChoice);
}

function pickWinner(userChoice, computerChoice) {                                       //Determine the winner based on the game rules. (15%)
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(result, userChoice, computerChoice) {                                //Using innerHTML to help simplify displaying results: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    resultDisplay.innerHTML = `${result}<br>
            You chose: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}          
            |
            The Computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
}                                                                                                           //Display the game result in the result display area. (15%)