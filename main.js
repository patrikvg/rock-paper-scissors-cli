let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices.at(Math.random() * 3);
}

function getHumanChoice() {
    return prompt("Please choose rock, paper or scissors:");
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "paper" || humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You Won!");
    }
    else {
        computerScore++;
        console.log("You lose!");
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        playRound();
    }

    if (humanScore === 5) {
        console.log("Congratulations! You are the Winner!")
    }
    if(computerScore === 5) {
        console.log("Unfortunately the computer beat you! Next time you will win!");
    }

    humanScore = 0;
    computerScore = 0;
}

playGame();