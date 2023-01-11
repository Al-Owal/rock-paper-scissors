//Function to get random computer selection
/*function getComputerChoice() {
    function random_items(items) {
        return items[Math.floor(Math.random()*items.length)];
    }    

    const items = ['rock', 'paper', 'scissor'];
    console.log(random_items(items));
}*/

function getComputerChoice(choice) {
    return choice[Math.floor(Math.random()*choice.length)];
}

const choice = ['rock', 'paper', 'scissors'];
// console.log(getComputerChoice(choice));

const playerSelection = 'rock';
const computerSelection = getComputerChoice(choice);




//Function for a single round
function playRound(playerSelection, computerSelection) {
    /*if ('rock', 'paper') {
        return("You Lose! Paper beats Rock.");
    } else if ('rock', 'scissors') {
        return("You Win! Rock beats Scissors");
    } else if ('rock', 'rock') {
        return("Draw! You both chose Rock.");
    } else if ('paper', 'paper') {
        return("Draw! You both chose Paper.");
    } else {
        return("This is an invalid choice.");
    }*/

    switch (playerSelection, computerSelection){
        case('rock', 'paper'):
            return("You Lose! Paper beats Rock.");
            break;
        case('rock', 'scissors'):
            return("You Win! Rock beats Scissors.");
            break;
        case('rock', 'rock'):
            return("Draw! You both chose Rock.");
            break;
        case('paper', 'paper'):
            return("Draw! You both chose Paper.");
            break;
        case('paper', 'scissors'):
            return("You Lose! Scissors beat Paper.");
            break;
    }
}




console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection);
console.log(computerSelection);


//getComputerChoice();
//playRound();

/*
function game() {

}*/


