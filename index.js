let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3));
    if(choice == 0) return "rock";
    else if(choice == 1) return "paper";
    return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Enter your choice");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice) {
        console.log("Draw! Play Again?");
        return;
    }   

    if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            computerScore++;
            console.log("You lost! rock beats scissors.");
        } else{
            humanScore++;
            console.log("You won! scissors beats paper.");
        }
    } else if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++;
            console.log("You lost! paper beats rock.");
        } else{
            humanScore++;
            console.log("You won! rock beats scissors.");
        }
    } else{
        if(computerChoice === "scissors"){
            computerScore++;
            console.log("You lost! scissors beats paper.");
        } else{
            humanScore++;
            console.log("You won! paper beats rock.");
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++) playRound(getHumanChoice(), getComputerChoice());

    if(humanScore > computerScore) console.log("You Won! GGs!");
    else if(humanScore < computerScore) console.log("You Lost! Refresh to play again!");
    else console.log("Draw! Come on!");
}

playGame();

