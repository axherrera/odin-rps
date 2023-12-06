function getComputerChoice(){
    return Math.floor(Math.random() * 3 + 1)
}

function toString(numChoice){
    switch (numChoice){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
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

function playRound(){
    const playerChoice = toNum(prompt("Choose rock, paper, or scissors!"))
    const computerChoice = getComputerChoice();
    var result = (playerChoice) - computerChoice;
    if(result == 0){
        console.log(`${toString(computerChoice)} and ${toString(playerChoice)}...Its a tie, play again`)
        return playRound();
    }
    else if( result == 2 || result == -1){
        console.log(`Sorry, you lost. ${toString(computerChoice)} beats ${toString(playerChoice)}!`)
        return 0;
    }
    else
        console.log(`You win!! ${toString(playerChoice)} beats ${toString(computerChoice)}!`)
        return 1;
}

function game(){
    var computer = 0;
    var player = 0;
    var winner;
    for(let i = 0; i<5; i++){
        console.log(`Round ${i+1}`);
        result = playRound();
        if(result)
            player++;
        else
            computer++;
        if(computer ==3 || player ==3){
            winner = computer == 3 || player == 3
            break
        }
    }

    if(player>computer)
        winner = "Player"
    else
        winner= "Computer"
    console.log(`The score is ${player}:${computer}. ${winner} wins!!!`)

}


game();