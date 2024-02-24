//got annoyed, deleted everything, starting over -.- Again.

//begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

const theChoices = ['scissor', 'paper', 'rock'];

function getComputerChoice(theChoices){
    return theChoices[Math.floor(Math.random() * theChoices.length)];
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! Try again.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
        return `Winner Winner! Chicken Dinner!`;
    } else {
        return 'You Lost. Shame. Shame. Shame.';
    }
}
  
const playerSelection = "rock";
const computerSelection = getComputerChoice(theChoices);




console.log(`Player's Pick: ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`);
console.log(`Computer's Pick: ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`);
console.log(playRound(playerSelection, computerSelection));

