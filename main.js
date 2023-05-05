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

let computerScore = 0;
let playerScore = 0;

function round(playerSelection, computerSelection){
    promptVar = prompt("What is your move?");
    playerSelection = promptVar.toLowerCase();

    console.log(playerSelection);

    computerSelection = computerPlay();

    if(computerSelection == playerSelection){
        return "Tie";
    }else if(computerSelection == "rock" && playerSelection == "scissors"){
	computerScore +=1;
        return "You lose! Rock beats scissors";
    }else if(computerSelection == "rock" && playerSelection == "paper"){
	playerScore += 1;
        return "You won! Paper beats Rock";
    }else if(computerSelection == "paper" && playerSelection == "rock"){
	computerScore +=1;
        return "You lose! Paper beats Rock";
    }else if(computerSelection == "paper" && playerSelection == "scissors"){
	playerScore += 1;
        return "You won! Scissors beats Paper";
    }else if(computerSelection == "scissors" && playerSelection == "paper"){
	computerScore +=1;
        return "You lose! Scissors beats Paper";
    }else if(computerSelection == "scissors" && playerSelection == "rock"){
	playerScore += 1;
        return "You won! Rock beats Scissors";
    }
}

function game(){
    for(i = 0; i < 5; i++){
	round();
	console.log(computerScore + " y " + playerScore);
    }
	if(computerScore > playerScore){
		return "You lose, pc wins";
	}else if(playerScore > computerScore){
		return "You lose, pc wins";
	}else{
		return "Its a tie";
	}
}