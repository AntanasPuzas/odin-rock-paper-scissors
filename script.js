let computerPlay = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    return random === 1 ? "Rock" : random === 2 ? "Paper" : "Scissors";
}

let possiblePlayerSelection = ["rock", "paper", "scissors"];

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (possiblePlayerSelection.indexOf(playerSelection) === -1) {
        return "Error";
    }
}

let playerSelection = "paper";
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));