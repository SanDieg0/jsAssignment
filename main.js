function computerPlay(){
    const randomValue = Math.random();
    let computerSelect;
    if(randomValue <= 0.33){
        computerSelect = "rock";

        // console.log(computerSelect);

        return computerSelect;
    }else if(randomValue > 0.66){
        computerSelect = "scissors";

        // console.log(computerSelect);
        
        return computerSelect;
    }else{
        computerSelect = "paper";

        // console.log(computerSelect);
        
        return computerSelect;
    }
}

let userScore = 0
let computerScore = 0

const playRound = function round(playerSelection, computerSelection){
    promptVar = prompt("Would you like to choose Rock, Paper or Scissors?");
    playerSelection = promptVar.toLowerCase();

    computerSelection = computerPlay();

    if(computerSelection == playerSelection){
        console.log("It's a Tie");
        console.log(`Your score is ${userScore} and the computer's score is ${computerScore}`)
    }else if(computerSelection == "rock" && playerSelection == "scissors"){
        computerScore += 1;
        console.log("You lose! Rock beats scissors");
        console.log(`Your score is ${userScore} and the computer's score is ${computerScore}`)
    }else if(computerSelection == "rock" && playerSelection == "paper"){
        userScore += 1;
        return "You won! Paper beats Rock";
        console.log(`Your score is ${userScore} and the computer's score is ${computerScore}`)
    }else if(computerSelection == "paper" && playerSelection == "rock"){
        computerScore += 1;
        console.log("You lose! Paper beats Rock");
        console.log(`Your score is ${userScore} and the computer's score is ${computerScore}`)
    }else if(computerSelection == "paper" && playerSelection == "scissors"){
        userScore += 1;
        console.log("You won! Scissors beats Paper");
        console.log(`Your score is ${userScore} and the computer's score is ${computerScore}`)
    }else if(computerSelection == "scissors" && playerSelection == "paper"){
        computerScore += 1;
        console.log("You lose! Scissors beats Paper");
        console.log(`Your score is ${userScore} and the computer's score is ${computerScore}`)
    }else if(computerSelection == "scissors" && playerSelection == "rock"){
        userScore += 1;
        console.log("You won! Rock beats Scissors");
        console.log(`Your score is ${userScore} and the computer's score is ${computerScore}`)
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    function winner() {
        if(computerScore > userScore){
            return "You lose, the computer wins";
        }else if(userScore > computerScore){
            return "You won, the computer is a looser";
        }else{
            return "Its a tie";
        }
    }
    return winner()
}
