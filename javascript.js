function getComputerChoice() {
    function random_items(items) {
        return items[Math.floor(Math.random()*items.length)];
    }    

    const items = ['rock', 'paper', 'scissor'];
    console.log(random_items(items));
}

function playRound(playerSelection, computerSelection) {
    
}

getComputerChoice();

/*
function game() {

}*/

/*
const playerSelection;
const computerSelection = getComputerChoice();*/