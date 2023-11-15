/**
 * 
 * string params case-insensitive
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * 
 * @returns {string} 
 */
function playRound(playerSelection, computerSelection) {
    //parameters Case-insensitive

    // function get winner
    let winner = 'computer';

    switch (winner) {
        case 'computer':
            return `You Lose! ${computerSelection} beats ${playerSelection}`
            
        case
        default:
            break;
    }
    
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
