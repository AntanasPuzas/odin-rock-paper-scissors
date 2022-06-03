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

let game = () => {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Please input Rock, Paper or Scissors:");
        let playerSelectionFormatted = playerSelection.charAt(0).toUpperCase() +
            playerSelection.slice(1).toLowerCase();
        let roundOutcome = playRound(playerSelection, computerSelection);

        alert("Computer selection: " + computerSelection + "\n"
            + "Player selection: " + playerSelectionFormatted + "\n" +
            (roundOutcome === "Error" ? "Error"
                : roundOutcome === 0 ? "It's a Draw! Go Again!"
                    : roundOutcome === -1 ? "You Lose! " + computerSelection +
                        " beats " + playerSelectionFormatted + "!"
                        : "You Win! " + playerSelectionFormatted + " beats " + computerSelection + "!"));
    }
    alert("Game Over!");
}

game();