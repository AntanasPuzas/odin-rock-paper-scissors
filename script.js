let computerPlay = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    return random === 1 ? "Rock" : random === 2 ? "Paper" : "Scissors";
}

let possiblePlayerSelection = ["rock", "paper", "scissors"];
let winningConditions = [{ player: "rock", computer: "scissors" }, { player: "scissors", computer: "paper" },
{ player: "paper", computer: "rock" }];

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