let rockWinner = `rock-scissors`;
let scissorsWinner = `scissors-paper`;
let paperWinner = `paper-rock`;

winnerCombinations = [];
winnerCombinations.push(rockWinner);
winnerCombinations.push(scissorsWinner);
winnerCombinations.push(paperWinner);

/**
 * 
* test:
* selection1 scissors, rock
* scissors, scissors
* scissors, paper
* rock, abracadabra
*
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * @returns 
 */
function getWinner(playerSelection, computerSelection) {
    /**
     * compare selection and winner combinations
     * return array of combinations that contains selection
     * compare each string from the array with the other selection
     * return the rule which passed the second comparison.
     * Cut the first part of the returned string. That will be the winner.
     */
    for (let i = 0; i < winnerCombinations.length; i++) {
        const combination = winnerCombinations[i];

        if (combination.includes(playerSelection) 
            && combination.includes(computerSelection)
        ) {
            if (combination.startsWith(playerSelection)) {
                return playerSelection;
            } else if (combination.startsWith(computerSelection)) {
                return computerSelection;
            }
        }
    }
}

function getComputerChoice() {
    let randomChoice = getRandomNum(1, 3);

    switch(randomChoice) {
        case 1:
            return `Rock`;
        case 2:
            return `Paper`;
        case 3:
            return `Scissors`;
        default:
            return `Abracadabra`;
    }
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
        return `It\'s a tie!`;
    }
    const winner = getWinner(lowPlayerSelection, lowComputerSelection);

    const firstLetterUpper = winner[0].toUpperCase() + winner.slice(1);
    
    return `Winner's choice: ${firstLetterUpper}`; 
}

// function getResultMessage()

/**
 * Cycle a loop 5 times
 * get player selection by prompt
 * set the selections to playRound function
 * get the result
 */
function game() {
    const numberOfGames = 5;
    let i = 0;
    while (i < numberOfGames) {
        const playerSelection = prompt(`Your choice. Default is \"Scissors\"`, `Scissors`);
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
        i++;
    }
}

game();

