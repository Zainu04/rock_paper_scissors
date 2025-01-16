const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })

        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach((option) => {
            option.addEventListener("click", function () {
                if (pScore < 5 && cScore < 5) { // Only play if the game hasn't ended
                    const computerNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOptions[computerNumber];

                    setTimeout(() => {
                        compareHands(this.textContent, computerChoice);

                        playerHand.src = `/Users/zainabakhtar/Desktop/repos/rock_paper_scissors/assets/${this.textContent.toLowerCase()}.png`;
                        computerHand.src = `/Users/zainabakhtar/Desktop/repos/rock_paper_scissors/assets/${computerChoice.toLowerCase()}.png`;
                    }, 2000);

                    playerHand.style.animation = "shakePlayer 2s ease";
                    computerHand.style.animation = "shakeComputer 2s ease";
                }
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winnerText = document.querySelector(".winner");

        if (playerChoice === computerChoice) {
            winnerText.textContent = "It is a tie";
            return;
        }

        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winnerText.textContent = "Player Wins";
                pScore++;
            } else {
                winnerText.textContent = "Computer Wins";
                cScore++;
            }
        } else if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winnerText.textContent = "Computer Wins";
                cScore++;
            } else {
                winnerText.textContent = "Player Wins";
                pScore++;
            }
        } else if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winnerText.textContent = "Computer Wins";
                cScore++;
            } else {
                winnerText.textContent = "Player Wins";
                pScore++;
            }
        }

        updateScore();  // Keep this call to update the score
        checkGameOver(); // Check if the game is over after scoring
    };

    const checkGameOver = () => {
        const winnerText = document.querySelector(".winner");

        if (pScore >= 5) {
            winnerText.textContent = "Player wins the game!";
            disableGame(); // Disable further moves if game is over
        } else if (cScore >= 5) {
            winnerText.textContent = "Computer wins the game!";
            disableGame(); // Disable further moves if game is over
        }
    };

    const disableGame = () => {
        const options = document.querySelectorAll(".options button");
        options.forEach(option => option.disabled = true);
        showResetButton(); // Show reset button when game ends
    };

    const showResetButton = () => {
        const resetBtn = document.createElement("button");
        resetBtn.textContent = "Play Again";
        resetBtn.classList.add("reset-btn");
        const match = document.querySelector(".match");
        match.appendChild(resetBtn);

        resetBtn.addEventListener("click", resetGame);  // Reset game when clicked
    };

    const resetGame = () => {
        pScore = 0;
        cScore = 0;
        updateScore(); // Reset the score

        const options = document.querySelectorAll(".options button");
        options.forEach(option => option.disabled = false);

        const winnerText = document.querySelector(".winner");
        winnerText.textContent = "Choose an option";

        const resetBtn = document.querySelector(".reset-btn");
        resetBtn.remove();

        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        introScreen.classList.remove("fadeOut");
        match.classList.remove("fadeIn");
        match.classList.add("fadeOut");

        // Reset animations
        document.querySelector(".player-hand").style.animation = "";
        document.querySelector(".computer-hand").style.animation = "";
    };

    startGame();
    playMatch();
};

game();
