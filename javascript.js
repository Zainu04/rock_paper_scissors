
/*choices to pick from*/
let choice = ['rock', 'paper', 'scissors']
let result = choice[Math.floor(Math.random() * 3)];

/* get computer input*/
function getComputerChoice () {
    return choice = "you chose " + (result);
}
console.log (result)

/* get user input*/
let yourChoice = prompt("Pick rock, papers, or scissors").toLowerCase();
function getHumanChoice () {
    return choice (yourChoice);
}
console.log (yourChoice)

/*function that will play each round*/
let humanScore = 0;
let computerScore = 0;
let humanChoice = yourChoice;
let computerChoice = result;

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "It was a tie, try again!";
    } else if (humanChoice === 'rock' && computerChoice == 'scissors') {
        return "You Win! Rock beats scissors";
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        return "You Win! Paper beats rock";
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        return "You Win! Scissors win paper";
    } else {
        return "You Loose, try again!";
    }
}
playRound (yourChoice, result);
 console.log (playRound (humanChoice, computerChoice))
