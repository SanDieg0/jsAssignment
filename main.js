function computerPlay(){
    const randomValue = Math.random();
    let computerSelecction;
    if(randomValue <= 0.33){
        computerSelecction = "Rock";
        return computerSelecction;
    }else if(randomValue > 0.66){
        computerSelecction = "Scissors";
        return computerSelecction;
    }else{
        computerSelecction = "Paper";
        return computerSelecction;
    }
}