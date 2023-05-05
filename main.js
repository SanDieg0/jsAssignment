function computerPlay(){
    const randomValue = Math.random();
    let computerSelect;
    if(randomValue <= 0.33){
        computerSelecction = "Rock";
        return computerSelect;
    }else if(randomValue > 0.66){
        computerSelecction = "Scissors";
        return computerSelect;
    }else{
        computerSelecction = "Paper";
        return computerSelect;
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
    }else if(computerSelection == "Paper" && playerSelection == "rock"){
        return "You lose! Paper beats Rock";
    }else if(computerSelection == "Paper" && playerSelection == "scissors"){
        return "You won! Scissors beats Paper";
    }else if(computerSelection == "Scissors" && playerSelection == "paper"){
        return "You lose! Scissors beats Paper";
    }else if(computerSelection == "Scissors" && playerSelection == "rock"){
        return "You won! Rock beats Scissors";
    }
}