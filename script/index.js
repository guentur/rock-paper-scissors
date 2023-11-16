function showWinnerMessage(winner) {
    
}

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

    if (lowPlayerSelection === lowComputerSelection) {
        return 'It\'s a tie!';
    }
    const winner = getWinner(lowPlayerSelection, lowComputerSelection);


    switch (winner) {
        case 'computer':
            return `You Lose! ${computerSelection} beats ${playerSelection}`
            
        case 'player':
            return 
        default:
            break;
    }
    
}

function GameRules() {
    let rockWinner = 'rock-scissors';
    let scissorsWinner = 'scissors-paper';
    let paperWinner = 'paper-rock';

    this.winnerCombinations = [];
    this.winnerCombinations.push(rockWinner);
    this.winnerCombinations.push(scissorsWinner);
    this.winnerCombinations.push(paperWinner);

    /**
     * @param {string} selectionFirst 
     * @param {string} selectionSecond 
     */
    this.iterateForPossibleWinner = function(selectionFirst, selectionSecond) {
        /**
         * compare selection and winner combinations
         * return array of combinations that contains selection
         * compare each string from the array with the other selection
         * return the rule which passed the second comparison.
         * Cut the first part of the returned string. That will be the winner.
         */
        for (let i = 0; i < this.winnerCombinations.length; i++) {
            const combination = this.winnerCombinations[i];

            if (combination.includes(selectionFirst) 
                && combination.includes(selectionSecond)
            ) {
                if (combination.startsWith(selectionFirst)) {
                    return selectionFirst;
                } else {
                    return selectionSecond;
                }
            }
        }
    }
}

/**
 * 
* test:
* selection1 scissors, rock
* scissors, scissors
* scissors, paper
*
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * @returns 
 */
function getWinner(playerSelection, computerSelection) {
    

    return 
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
