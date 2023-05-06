console.log("Wellcome to the game Rock, Paper, Scissors\nTo start you have to type the function game()\nThen you will have to compete against the computer typing your move wether it's rock, paper or scissors");
/* PLAYERS MOVEMENTS */

let options = ["rock", "paper", "scissors"]

function computerPlay(){
    const randomValue = Math.random();
    let computerMove;
    if(randomValue <= 0.33){
        computerMove = options[0];
    }else if(randomValue > 0.66){
        computerMove = options[1];
    }else{
        computerMove = options[2];
    }
    return computerMove;
}

function playerPlay(){

    let playerMove = false;
    let inputValue;

    while(playerMove == false){
        
        inputValue = prompt("Please choose your move: rock, paper or scissors");

//Use try-catch to handle invalid inputs and prevent a crash

        try {
            playerMove = inputValue.trim().toLowerCase();
        } catch (error) {
            alert("Invalid input. Please choose rock, paper or scissors.");
        }

//conditional to check if the input is empty

        if(playerMove.length === 0){
            playerMove = false;
            alert("Invalid input. Please write rock or paper or scissors.");
        }else if(!options.includes(playerMove)){
            playerMove = false;
            alert("Invalid input. Please choose rock, paper or scissors.");
        }

    }

    return playerMove;

}

/* MOVEMENTS COMPARISON */

let playerScore = 0;
let computerScore = 0;

function playRound(){

    let computerMove = computerPlay();
    let playerMove = playerPlay();

    if(computerMove == playerMove){
        console.log("It's a Tie " + computerMove + " vs " + playerMove);
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
    }else if(computerMove == "rock" && playerMove == "scissors"){
        computerScore += 1;
        console.log("You lose! Rock beats scissors");
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
    }else if(computerMove == "rock" && playerMove == "paper"){
        playerScore += 1;
        console.log("You won! Paper beats Rock");
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
    }else if(computerMove == "paper" && playerMove == "rock"){
        computerScore += 1;
        console.log("You lose! Paper beats Rock");
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
    }else if(computerMove == "paper" && playerMove == "scissors"){
        playerScore += 1;
        console.log("You won! Scissors beats Paper");
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
    }else if(computerMove == "scissors" && playerMove == "paper"){
        computerScore += 1;
        console.log("You lose! Scissors beats Paper");
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
    }else if(computerMove == "scissors" && playerMove == "rock"){
        playerScore += 1;
        console.log("You won! Rock beats Scissors");
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
    }
}

/* ROUNDS AND GAME START*/

function game() {
    for (let i = 0; i < 5; i++) {
        console.log("Round #" + (i+1) + "--------");
        playRound();
        console.log("__________________")
    }
    function winner() {
        if(computerScore > playerScore){
            return "_-You lose, the computer wins-_";
        }else if(playerScore > computerScore){
            return "_-You won, the computer is a looser-_";
        }else{
            return "_-Its a tie-_";
        }
    }

    console.log(winner());
    computerScore = 0;
    playerScore = 0;
}