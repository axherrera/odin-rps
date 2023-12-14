//Constants
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const PLAYER = "Player";
const COMPUTER = 'Computer';

//Player score trackers
var computer = 0;
var player = 0;

//Query selectors
const popup = document.querySelector(".popup");
const startButton = document.querySelector(".btn");

const computerScore = document.querySelectorAll(".score.computer")[0];
const playerScore = document.querySelectorAll(".score.player")[0];

const computerDisplay = document.querySelectorAll(".display.c")[0];
const playerDisplay = document.querySelectorAll(".display.p1")[0];

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

//Game related functions
function getComputerChoice(){
    return Math.floor(Math.random() * 3 + 1)
}

function checkScore(score, side){
    if(score==3){
        alert(`${side} is the winner!`)
        computerScore.textContent = "0";
        playerScore.textContent = "0";
    }
    
}

function toString(numChoice){
    switch (numChoice){
        case 1:
            return "🪨";
        case 2:
            return "📄";
        case 3:
            return "✂️";
    }
}

function toNum(stringChoice){
    switch (stringChoice.toLowerCase()){
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
    }
}

function updateScore(isPlayerPoint){
    if(isPlayerPoint){
        let updatedScore = parseInt(playerScore.textContent)+1;
        playerScore.textContent = updatedScore;

    }
    else{
        let updatedScore = parseInt(computerScore.textContent)+1;
        computerScore.textContent = updatedScore;
    }
}

function playRound(playerSelection, computerDisplay){
    const computerChoice = getComputerChoice();
    computerDisplay.textContent = toString(computerChoice)
    let result = (playerSelection) - computerChoice;
    if(result == 0){
        return -1;
    }
    else if( result == 2 || result == -1){
        return 0;
    }
    else
        return 1;
}

//All Event Listeners
rockButton.addEventListener('click', ()=>{
    playerDisplay.textContent = "🪨";
    let result = playRound(ROCK, computerDisplay)
    if(result==1) {
        updateScore(true);
        player++;
        checkScore(player, PLAYER); 
    }
    else if(result==0){
        updateScore(false);
        computer++;
        checkScore(computer, COMPUTER); 
    }
    else return;
});
paperButton.addEventListener('click', ()=>{
    playerDisplay.textContent = "📄";
    let result = playRound(PAPER, computerDisplay)
    if(result==1) {
        updateScore(true);
        player++;
        checkScore(player, PLAYER); 
    }
    else if(result==0){
        updateScore(false);
        computer++;
        checkScore(computer, COMPUTER);
    }
    else return;
});

//Game Logic
scissorsButton.addEventListener('click', ()=>{
    playerDisplay.textContent = "✂️";
    let result = playRound(SCISSORS, computerDisplay)
    if(result==1) {
        updateScore(true);
        player++;
        checkScore(player, PLAYER); 
    }
    else if(result==0){
        updateScore(false);
        computer++;
        checkScore(computer, COMPUTER); 
    }
    else return;
});
startButton.addEventListener('click', ()=>{
    popup.setAttribute("style", "visibility:hidden;");
});