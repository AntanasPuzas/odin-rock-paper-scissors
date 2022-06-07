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
const resultsText = document.querySelector("#results-text")

rockButton.addEventListener("click", () => resultsDiv.textContent = playRound("rock", computerPlay()));
paperButton.addEventListener("click", () => resultsDiv.textContent = playRound("paper", computerPlay()));
scissorsButton.addEventListener("click", () => resultsDiv.textContent = playRound("scissors", computerPlay()));

// let game = () => {
//     let computerSelection = computerPlay();
//     let playerSelection = prompt("Please input Rock, Paper or Scissors:");
//     let playerSelectionFormatted = playerSelection.charAt(0).toUpperCase() +
//         playerSelection.slice(1).toLowerCase();
//     let roundOutcome = playRound(playerSelection, computerSelection);

//     console.log("Computer selection: " + computerSelection + "\n"
//         + "Player selection: " + playerSelectionFormatted + "\n" +
//         (roundOutcome === "Error" ? "Error"
//             : roundOutcome === 0 ? "It's a Draw! Go Again!"
//                 : roundOutcome === -1 ? "You Lose! " + computerSelection +
//                     " beats " + playerSelectionFormatted + "!"
//                     : "You Win! " + playerSelectionFormatted + " beats " + computerSelection + "!"));
//     console.log("Game Over!");
// }

// game();