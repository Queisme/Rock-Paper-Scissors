/*
begin with a function called 'getComputerChoice' that will randomly return either: 'Rock', 'Paper', or 'Scissors'. This function is to make the computer's play.
**Tip: use the console to make sure this is returning the expected output before moving to the next step!

1. give the computer 3 choices
2. find out the mathematical formula that will allow the computer to randomly pick between the three
3. implement and return
*/
  

let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    console.log(choices[(Math.floor(Math.random() * choices.length))]);
}
getComputerChoice()