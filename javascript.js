
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
    console.log("Starting the game...");
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
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
}

/* Start the game */
playGame();
