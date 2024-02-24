//got annoyed, deleted everything, starting over -.- Again.

//begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

//function 'playRound' takes in 'playerSelection' and 'computerSelection' and declares winner or loser or tie.

//function 'playGame' loops game 5 times. Keep score. Report a Winner or loser at the end.
/*
function playGame(theChoices) {
    for (let i = 0; i < 5; i++) {
        
        }
    }

}
*/

const theChoices = ['scissor', 'paper', 'rock'];

function getComputerChoice(theChoices){
    return theChoices[Math.floor(Math.random() * theChoices.length)];
}

const computerSelection = getComputerChoice(theChoices);
const playerSelection = 'rock' //prompt('Choose your weapon: (Rock, Paper, or Scissor)'.toLowerCase());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return tie;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
        return winner;
    } else {
        return loser;
    }
}
const tie = `It's a tie! Try again.`;
const winner = `Winner Winner! Chicken Dinner!`;
const loser = 'You Lost. Shame. Shame. Shame.';

let playerScore = 0;
let computerScore = 0;

function Score() {
    if (playRound(playerSelection, computerSelection) === `Winner Winner! Chicken Dinner!`) {
        playerScore +=1;
    } else if (playRound(playerSelection, computerSelection) === 'You Lost. Shame. Shame. Shame.') {
        computerScore +=1;
    }
}
console.log(`Player's Pick: ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`);
console.log(`Computer's Pick: ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`);
console.log(playRound(playerSelection, computerSelection));
console.log(`Player Score: ${playerScore}`);
console.log(`Computer Score: ${computerScore}`);











// const theChoices = ['scissor', 'paper', 'rock'];

// function getComputerChoice(theChoices){
//     return theChoices[Math.floor(Math.random() * theChoices.length)];
// }


// // function playGame() {
// //     for (let i = 0; i < 5; i++) {
        
// //     }

// // }



// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         return tie;
//     } else if (
//         (playerSelection === "rock" && computerSelection === "scissor") ||
//         (playerSelection === "paper" && computerSelection === "rock") ||
//         (playerSelection === "scissor" && computerSelection === "paper")) {
//         return winner;
//     } else {
//         return loser;
//     }

    
    
    
// }





// function Score() {
//     if (roundResult === `Winner Winner! Chicken Dinner!`) {
//         playerScore +=1;
//     } else if (roundResult == 'You Lost. Shame. Shame. Shame.') {
//         computerScore +=1;
//     }

// }

// let playerScore = 0;
// let computerScore = 0;

// const tie = `It's a tie! Try again.`;
// const winner = `Winner Winner! Chicken Dinner!`;
// const loser = 'You Lost. Shame. Shame. Shame.'

// const playerSelection = 'paper' //prompt('Choose your weapon: (Rock, Paper, or Scissor)');
// const computerSelection = getComputerChoice(theChoices);

// const roundResult = playRound(playerSelection, computerSelection);
// console.log(`Player's Pick: ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`);
// console.log(`Computer's Pick: ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`);
// console.log(roundResult);
// console.log(Score());
// console.log(`Player Score: ${playerScore}`);
// console.log(`Computer Score: ${computerScore}`);




