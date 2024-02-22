/*
begin with a function called 'getComputerChoice' that will randomly return either: 'Rock', 'Paper', or 'Scissors'. This function is to make the computer's play.
**Tip: use the console to make sure this is returning the expected output before moving to the next step!

1. give the computer 3 choices
2. find out the mathematical formula that will allow the computer to randomly pick between the three
3. implement and return
*/
/* 
write a function that plays a single round of RPS. It should take two parameters - the 'playerSelection' and 'computerSelection' - then return a string that declares the winner or tie of the round: "You Lost! Paper beats Rock"
**Make 'playerSelection' case-insensitive 

1. need to take into in from player.
**make case-insensitive
2. compare playerSelection to getComputerChoice.
3. if tie respond with It's a tie
4. compare the two through all of the possibilities and declare winner
paper-rock-scissors or loser and why.
*/
/*
new function called 'playGame()' use previous function inside it to play a 5 round game that keeps score and reports a winner or loser at the end

1. Make a loop
2. learn how to tell computer to keep score and report winner and loser results after each iteration
3. put working 'getComputerChoice' function inside loop function
*/


function count() {
    for (let i = 0; i < 5; i++){
        console.log(getComputerChoice);
    }
}
function getComputerChoice(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = (choices[(Math.floor(Math.random() * choices.length))]);
            
    if (computerSelection === playerSelection) {
        return 'It\'s a tie. Try again!';
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
              ) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}. `;
            }
}
const playerSelection = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();

console.log(getComputerChoice(playerSelection));

