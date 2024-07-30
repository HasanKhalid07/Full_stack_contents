// Initialize player and computer scores to 0
let playerScore = 0;
let computerScore = 0;

// Function to play a round of rock-paper-scissors
function play(playerChoice) {
    // Array containing the possible choices
    const choices = ['rock', 'paper', 'scissors'];
    
    // Randomly select a choice for the computer
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    // Determine the result of the game based on the player's and computer's choices
    const result = getResult(playerChoice, computerChoice);
    
    // Display the result of the game
    displayResult(playerChoice, computerChoice, result);
    
    // Update the scores based on the result
    updateScore(result);
}

// Function to determine the result of the game
function getResult(player, computer) {
    // If both choices are the same, it's a draw
    if (player === computer) return 'draw';

    // Determine if the player wins
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    } else {
        // Otherwise, the player loses
        return 'lose';
    }
}

// Function to display the result of the game
function displayResult(playerChoice, computerChoice, result) {
    // Select the element to display the result
    const resultDiv = document.querySelector('.result');
    
    // Update the inner HTML of the result element with the choices and result
    resultDiv.innerHTML = `
        <p>You chose: ${playerChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
        <p>Result: ${result.charAt(0).toUpperCase() + result.slice(1)}</p>
    `;
}

// Function to update the scores based on the result
function updateScore(result) {
    if (result === 'win') {
        // If the player wins, increment the player's score and update the display
        playerScore++;
        document.getElementById('player-score').textContent = playerScore;
    } else if (result === 'lose') {
        // If the player loses, increment the computer's score and update the display
        computerScore++;
        document.getElementById('computer-score').textContent = computerScore;
    }
}
