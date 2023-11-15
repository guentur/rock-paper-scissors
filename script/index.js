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

function getComputerChoice() {
    let randomChoice = getRandomNum(1, 4)
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
