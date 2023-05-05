function computerPlay(){
    const randomValue = Math.random();
    let computerSelect;
    if(randomValue <= 0.33){
        computerSelect = "rock";

        console.log(computerSelect);

        return computerSelect;
    }else if(randomValue > 0.66){
        computerSelect = "scissors";

        console.log(computerSelect);
        
        return computerSelect;
    }else{
        computerSelect = "paper";

        console.log(computerSelect);
        
        return computerSelect;
    }
}

function round(playerSelection, computerSelection){
    promptVar = prompt("What is your move?");
    playerSelection = promptVar.toLowerCase();

    console.log(playerSelection);

    computerSelection = computerPlay();

    if(computerSelection == playerSelection){
        return "Tie";
    }else if(computerSelection == "rock" && playerSelection == "scissors"){
        return "You lose! Rock beats scissors";
    }else if(computerSelection == "rock" && playerSelection == "paper"){
        return "You won! Paper beats Rock";
    }else if(computerSelection == "paper" && playerSelection == "rock"){
        return "You lose! Paper beats Rock";
    }else if(computerSelection == "paper" && playerSelection == "scissors"){
        return "You won! Scissors beats Paper";
    }else if(computerSelection == "scissors" && playerSelection == "paper"){
        return "You lose! Scissors beats Paper";
    }else if(computerSelection == "scissors" && playerSelection == "rock"){
        return "You won! Rock beats Scissors";
    }
}