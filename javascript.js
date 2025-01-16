
let choice = ['rock', 'paper', 'scissors'];

/* Get computer input */
function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

/* Get user input */
function getHumanChoice() {
    let input = prompt("Pick rock, paper, or scissors:").toLowerCase();
    while (!choice.includes(input)) {
        input = prompt("Invalid choice. Please pick rock, paper, or scissors:").toLowerCase();
    }
    return input;
}

/* Function to play a single round */
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose this round. ${computerChoice} beats ${humanChoice}.`;
    }
}

/* Function to play the game */
function playGame() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Scores -> You: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("\nFinal Scores:");
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations, you are the winner!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("It's a tie game!");
    }


/* Start the game */
playGame();

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

const content = document.createElement("div");

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
rockBtn.addEventListener("click", function () {
    console.log(playRound("Rock", computerChoice));
});
content.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
paperBtn.addEventListener("click", function () {
   console.log(playRound("Paper", computerChoice));
});
content.appendChild(paperBtn);

const scissorBtn = document.createElement("button");
scissorBtn.textContent = "Scissors";
scissorBtn.addEvenListener ("click", function () {
    console.log(playRound("Scissors", computerChoice));
});
content.appendChild(scissorBtn);

const results = document.createElement("div");
results.textContent = console.log(`Scores -> You: ${humanScore}, Computer: ${computerScore}`);
content.appendChild(results);