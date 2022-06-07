let computerPlay = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    return random === 1 ? "Rock" : random === 2 ? "Paper" : "Scissors";
}

const possiblePlayerSelection = ["rock", "paper", "scissors"];
const winningConditions = [{ player: "rock", computer: "scissors" }, { player: "scissors", computer: "paper" },
{ player: "paper", computer: "rock" }];

// Plays a round and returns 0 for draw, 1 for player win and -1 for player lose
let playRound = (playerSelection, computerSelection) => {
    let choices = { player: playerSelection.toLowerCase(), computer: computerSelection.toLowerCase() };
    let result = -1;
    if (possiblePlayerSelection.indexOf(choices.player) === -1) {
        result = "Error";
    }

    if (choices.player === choices.computer) {
        result = 0;
    }

    for (let i = 0; i < winningConditions.length; i++) {
        if (JSON.stringify(choices) === JSON.stringify(winningConditions[i])) {
            result = 1
        }
    }
    return result;
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const resultsDiv = document.querySelector("#results");

rockButton.addEventListener("click", () => resultsDiv.innerHTML =
    game(rockButton.id));
paperButton.addEventListener("click", () => resultsDiv.innerHTML = 
    game(paperButton.id));
scissorsButton.addEventListener("click", () => resultsDiv.innerHTML = 
    game(scissorsButton.id));

function resultString(roundOutcome, playerSelection, computerSelection) {
    let result = "Computer selection: " + computerSelection + "<br>"
        + "Player selection: " + playerSelection + "<br>";

    roundOutcome === "Error" ? result += "Error"
        : roundOutcome === 0 ? result += "It's a Draw! Go Again!"
            : roundOutcome === -1 ? result += "You Lose! " + computerSelection +
                " beats " + playerSelection + "!"
                : result += "You Win! " + playerSelection + " beats " + computerSelection + "!";
    return result;
}

let game = (playerSelection) => {
    let computerSelection = computerPlay();
    let roundOutcome = playRound(playerSelection, computerSelection);
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    return resultString(roundOutcome, playerSelection, computerSelection);
}