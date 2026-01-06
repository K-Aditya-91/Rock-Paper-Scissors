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
        resDiv.innerText = "Draw! Play Again?";
        return;
    }   

    if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            computerScore++;
            resDiv.innerText = "You lost! rock beats scissors.";
        } else{
            humanScore++;
            resDiv.innerText = "You won! scissors beats paper.";
        }
    } else if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++;
            resDiv.innerText = "You lost! paper beats rock.";
        } else{
            humanScore++;
            resDiv.innerText = "You won! rock beats scissors.";
        }
    } else{
        if(computerChoice === "scissors"){
            computerScore++;
            resDiv.innerText = "You lost! scissors beats paper.";
        } else{
            humanScore++;
            resDiv.innerText = "You won! paper beats rock.";
        }
    }

    humanScoreDiv.innerText = `Your Score: ${humanScore}`;
    computerScoreDiv.innerText = `Computer's Score: ${computerScore}`;
}

const buttons = document.querySelectorAll("button");
const resDiv = document.querySelector("#res");
const humanScoreDiv = document.querySelector("#human-score");
const computerScoreDiv = document.querySelector("#computer-score");

buttons.forEach(btn => {
    const curHumanChoice = btn.innerText.toLowerCase();
    btn.addEventListener("click", () => {
        playRound(curHumanChoice, getComputerChoice());
    })
});



