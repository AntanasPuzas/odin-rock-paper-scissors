let computerPlay = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    return random === 1 ? "Rock" : random === 2 ? "Paper" : "Scissors";
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    switch (computerSelection) {
        case "Rock":
            if (playerSelection === "paper") {
                return "You Win! Paper beats Rock!";
            } else if (playerSelection === "scissors") {
                return "You Lose! Rock beats Scissors!";
            } else if (playerSelection === "rock") {
                return "It's a tie! Go again!";
            } else {
                return "Error?";
            }
        case "Scissors":
            if (playerSelection === "paper") {
                return "You Lose! Scissors beats Paper!";
            } else if (playerSelection === "scissors") {
                return "It's a tie! Go again!";
            } else if (playerSelection === "rock") {
                return "You Win! Rock beats Scissors!";
            } else {
                return "Error?";
            }
        case "Paper":
            if (playerSelection === "paper") {
                return "It's a tie! Go again!"
            } else if (playerSelection === "scissors") {
                return "You Win! Scissors beats Paper!";
            } else if (playerSelection === "rock") {
                return "You Lose! Paper beats Rock!";
            } else {
                return "Error?";
            }
    }
}

let game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = computerPlay();

        alert("Computer chooses " + computerSelection + "!" + "\n" + 
        playRound(playerSelection, computerSelection));
    }
    alert("Game Over!");
}

game();