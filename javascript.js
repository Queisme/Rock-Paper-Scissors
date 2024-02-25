//got annoyed, deleted everything, starting over -.- Again. 

/*
User picks ('rock', 'paper', 'scissors')
    Game picks its random choice at the same time.
    Game play begins
        Compare user pick with game pick to see if user lost, won, or tied
        give user or computer score depending on who won/lost.
    Game finishes
    Repeat 4 more times
    Give final score out of 5. 
    Give rating to user. (Winner or Loser)
*/   

let playerScore = 0;
let computerScore = 0;

const tie = `It's a tie! Try again.`;
const winner = `Winner Winner! Chicken Dinner!`;
const loser = 'You Lost. Shame. Shame. Shame.';
const theChoices = ['scissors', 'paper', 'rock'];

function getComputerChoice(theChoices){ //makes computer's pick
    return theChoices[Math.floor(Math.random() * theChoices.length)];   
}

while (computerScore + playerScore < 5) { //keeps game going for best out of 5
    let playerSelection = prompt('Choose your weapon: (Rock, Paper, or Scissors)');
    let computerSelection = getComputerChoice(theChoices);
    playerSelection = playerSelection.toLowerCase();

    console.log(`Player's Pick: ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`);
    console.log(`Computer's Pick: ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`);
           
    if (playerSelection === computerSelection) { //tie, winner, loser
            console.log(tie);
        } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            console.log(winner);
            playerScore += 1;
        } else {
            console.log(loser);
            computerScore += 1;
        }
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        
    }

    if (playerScore + computerScore == 5) {
        if (playerScore > computerScore) {
            console.log(`Congratulations! You beat the computer in a best out of 5. You have the big brain.`);
        } else {
            console.log('Well, well, well. Best out of 5. Looks like there\'s a loser here. And I\'m not talking about me.');
        }
        
    }
    

