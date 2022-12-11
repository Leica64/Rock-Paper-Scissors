const rock = "rock"
const paper = "paper"
const scissors = "scissors" 
var playerScore = 0;
var computerScore = 0;

function startGame(){
    playerScore = 0;
    computerScore = 0;
    console.log("New game started");
    for (let i = 0; i < 5; i++){
        const round = i + 1;
        const input = prompt(`Round ${round.toString()} Rock, Paper or Scissors?`).toLowerCase();
        getComputerChoice(input);
        if(round === 5){
            console.log(callWinner());
        }
    }
    console.log(`thanks for playing Computer ${computerScore} Player ${playerScore}`);
}

function callWinner(){
    if(playerScore === computerScore){
        return ("It's a tie");
}
    else if(playerScore > computerScore){
        return("Congratulations you win!!");
    }
    else {
        return("You lose");
    }
}

function getComputerChoice(input){
    const random = Math.floor(Math.random() * 3);
    var computerChoice = "";
    if(random === 0){ 
        computerChoice = rock;
    }
    else if(random === 1){
        computerChoice = paper;
    }
    else{
        computerChoice = scissors;
    }
    console.log(`Computer picks ${computerChoice}, you picked ${input}`);
    console.log(playRound(input, computerChoice));
}

function playRound(playerChoice, computerChoice){
if(playerChoice === computerChoice){
        return ("It's a tie");
    }
    else if (playerChoice===rock && computerChoice===paper){
        computerScore = computerScore + 1;
        return ("You lose this round, Paper beats Rock");
    }
    else if (playerChoice===paper && computerChoice===scissors){
        computerScore = computerScore + 1;
        return ("You lose this round, Scissors beats Paper");
    }
    else if (playerChoice===scissors && computerChoice===rock){
        computerScore = computerScore + 1;
        return ("You lose this round, Rock beats Scissors");
    }
    else{
        playerScore = playerScore + 1;
        return("You won this round");
    }
}