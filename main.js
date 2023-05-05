function computerPlay(){
    const randomValue = Math.random();
    let computerSelection;
    if(randomValue <= 0.33){
        computerSelecction = "Rock";
        return computerSelection;
    }else if(randomValue > 0.66){
        computerSelecction = "Scissors";
        return computerSelection;
    }else{
        computerSelecction = "Paper";
        return computerSelection;
    }
}

function round(playerSelection, computerSelection){
    playerSelection = prompt("What is your move?");
    computerSelection = computerPlay();

    if(computerSelection == playerSelection){
        return "Tie";
    }else if(computerSelection == "Rock" && playerSelection == "scissors"){
        return "You lose! Rock beats scissors";
    }else if(computerSelection == "Rock" && playerSelection == "paper"){
        return "You won! Paper beats Rock";
    }else if(computerSelection == "Paper" && playerSelection == "Rock"){
        return "You lose! Paper beats Rock";
    }else if(computerSelection == "Paper" && playerSelection == "scissors"){
        return "You won! Scissors beats Paper";
    }else if(computerSelection == "Scissors" && playerSelection == "Paper"){
        return "You lose! Scissors beats Paper";
    }else if(computerSelection == "Scissors" && playerSelection == "Rock"){
        return "You won! Rock beats Scissors";
    }
}