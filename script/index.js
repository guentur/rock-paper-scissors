const rockWinner = `rock-scissors`;
const scissorsWinner = `scissors-paper`;
const paperWinner = `paper-rock`;

winnerCombinations = [];
winnerCombinations.push(rockWinner);
winnerCombinations.push(scissorsWinner);
winnerCombinations.push(paperWinner);

const playerSide = `player`;
const computerSide = `computer`;

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

function firstLetterToUpperCase(string) {
    return string[0].toUpperCase() + string.slice(1);
}

/**
 * @returns {string} winner
 */
function playRound() {
    const playerSelection = prompt(`Your choice. Default is \"Scissors\"`, `Scissors`).toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

    //if it's a TIE
    if (playerSelection === computerSelection) {
        console.log(`It's a tie, so replay the round`)
        playRound();
    }

    const winnerSelection = getWinner(playerSelection, computerSelection);
    showRoundWinnerMessage(winnerSelection);

    if (winnerSelection == playerSelection) {
        return playerSide;
    } else if (winnerSelection == computerSelection) {
        return computerSide;
    }
}

function game() {
    const numberOfGames = 5;
    let i = 0;
    let playerScore = 0;
    let computerScore = 0;
    while (i < numberOfGames) {
        let winner = playRound();

        if (winner === playerSide) {
            playerScore++;
        } else {
            computerScore++;
        }

        i++;
    }
    if (playerScore > computerScore) {
        showGameWinnerMessage(playerSide);
    } else {
        showGameWinnerMessage(computerSide);
    }
}

function showGameWinnerMessage(winner) {
    const firstLetterUpper = firstLetterToUpperCase(winner); 
    message = `${firstLetterUpper}, you are the winner`; 

    console.log(message);
}

function showRoundWinnerMessage(winner) {
    const firstLetterUpper = firstLetterToUpperCase(winner); 
    message = `Winner's choice: ${firstLetterUpper}`; 

    console.log(message);
}

game();

