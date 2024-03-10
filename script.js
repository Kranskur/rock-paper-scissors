let computerWin = 0;
let playerWin = 0;
let round = 1;
// Make a function that randomly chooses between rock, paper and scissors
function getComputerChoice(){
    choice = Math.floor(Math.random() * 3) + 1
    if (choice == 1){
        return "Rock"
    }
    else if(choice == 2){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

// Make a function that plays a round of Rock Paper Scissors
// Take two parameters
// Return string that declares winner or tie of the round


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if(playerSelection == "rock" & computerSelection == "paper"){
        computerWin++;
        return "You lose! Paper beats Rock"
    }
    else if(playerSelection == "rock" & computerSelection == "scissors"){
        playerWin++;
        return "You win! Rock beats Scissors"
    }
    else if(playerSelection == computerSelection){
        return "It's a tie"
    }
    else if(playerSelection == "paper" & computerSelection == "scissors"){
        computerWin++;
        return "You lose! Scissors beats Paper"
    }
    else if(playerSelection == "paper" & computerSelection == "rock"){
        playerWin++;
        return "You win! Paper beats Rock"
    }
    else if(playerSelection == "scissors" & computerSelection == "rock"){
        computerWin++;
        return "You lose! Rock beats Scissors"
    }
    else if(playerSelection == "scissors" & computerSelection == "paper"){
        playerWin++;
        return "You win! Scissors beats Paper"
    }

}
//Make a function that plays a five round game, keeps score
// and reports a winner or loser at the end
function playGame(){
    for(round; round <= 5; round++){
        console.log(playRound(prompt("Choose rock, paper or scissors"),getComputerChoice()))
        console.log("Number of rounds: ", round, "\n", playerWin,"-",computerWin)
    }
    if (playerWin > computerWin){
        console.log("You won the game!")

    }
    else if (playerWin < computerWin){
    console.log("You lost the game :(")
}
    else {
    console.log("It's a tie")    
    }
}

console.log(playGame())