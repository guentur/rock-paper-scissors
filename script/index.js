/**
 * 
 * string params case-insensitive
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * 
 * @returns {string} 
 */
function playRound(playerSelection, computerSelection) {
    let lowPlayerSelection = playerSelection.toLowerCase();
    let lowComputerSelection = computerSelection.toLowerCase();

    const winner = getWinner(lowPlayerSelection, lowComputerSelection);


    switch (winner) {
        case 'computer':
            return `You Lose! ${computerSelection} beats ${playerSelection}`
            
        case
        default:
            break;
    }
    
}

// Как сравнить 2 строки
function getWinner(playerSelection, computerSelection) {
    const gameState = `${playerSelection}-${computerSelection}`;
    let rockWinner = 'rock-scissors';
    let scissorsWinner = 'scissors-paper';
    let paperWinner = 'paper-rock';

    if (rockWinner.test()) {

        return playerSelection;
    }
    
}

function getComputerChoice() {
    let randomChoice = getRandomNum(1, 3);

    switch(randomChoice) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
        default:
            return 'Abracadabra';
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
