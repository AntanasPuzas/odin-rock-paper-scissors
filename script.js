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
const resetButton = document.querySelector("#reset");

const resultsDiv = document.querySelector("#results");

rockButton.addEventListener("click", () => resultsDiv.innerHTML =
    game(rockButton.id));
paperButton.addEventListener("click", () => resultsDiv.innerHTML =
    game(paperButton.id));
scissorsButton.addEventListener("click", () => resultsDiv.innerHTML =
    game(scissorsButton.id));
resetButton.addEventListener("click", () => window.location.reload());

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

let counter = 0;
let playerWin = 0;
let computerWin = 0;

const counterDiv = document.querySelector("#counter");
const playerDiv = document.querySelector("#player-win");
const computerDiv = document.querySelector("#computer-win");

const victorDiv = document.querySelector("#victor");

let game = (playerSelection) => {
    let computerSelection = computerPlay();
    let roundOutcome = playRound(playerSelection, computerSelection);
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    counter++;

    switch (roundOutcome) {
        case 0:
            break;
        case -1:
            computerWin++;
            break;
        case 1:
            playerWin++;
            break;
    }


    if (playerWin >= 5) {
        victorDiv.textContent = "Player Wins!";
        playerDiv.textContent = "Player: " + 5;
        counterDiv.textContent = "Rounds Played: " + counter++;
        return '';
    } else if (computerWin >= 5) {
        victorDiv.textContent = "Computer Wins!";
        computerDiv.textContent = "Computer: " + 5;
        counterDiv.textContent = "Rounds Played: " + counter++;
        return '';
    }

    playerDiv.textContent = "Player: " + playerWin;
    computerDiv.textContent = "Computer: " + computerWin;
    counterDiv.textContent = "Rounds Played: " + counter;

    return resultString(roundOutcome, playerSelection, computerSelection);
}
