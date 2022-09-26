function computerChoice () {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    if (randomNumber == 1) { 
        return rock
        } else if (randomNumber == 2){
        return paper;
        } else { 
            return scissors;
    }
}
function capitalize (playerChoice){
    let allLowerCase = playerChoice.toLowerCase();
    let firstCap = allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1);
    //console.log(firstCap);
    return firstCap;
}
 



//const playerChoice = "rock";
//const computerPlay = computerChoice();
//console.log(playRound(capitalize(playerChoice) , computerPlay));


function game (){
    let roundsPlayed = 0;
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";

while (roundsPlayed < 5){
    roundsPlayed++; 
    playerChoice = prompt("Please choose, rock, paper or scissors");
    const computerPlay = computerChoice();
    console.log(playRound(capitalize(playerChoice) , computerPlay));
    console.log("Player wins total " + playerWin);
    console.log("Computer wins total " + computerWin);
    function playRound (firstCap, computerChoice){
    if (firstCap === "Rock" && computerChoice === "Rock"){
        return ("Tie! You selected " + firstCap + " and the computer selected " + computerChoice);
    } else if (firstCap === "Rock" && computerChoice === "Paper"){
        computerWin++;
        return ("Loser! " + computerChoice + " beats " + firstCap);
    } else if(firstCap === "Rock" && computerChoice === "Scissors"){
        playerWin++
        return ("Winner! " + firstCap + " demolishes " + computerChoice);
    } else if (firstCap === "Paper" && computerChoice === "Paper"){
        return ("Tie! You selected " + firstCap + " and the computer selected " + computerChoice);
    } else if(firstCap === "Paper" && computerChoice === "Scissors"){
        computerWin++
        return ("Loser! " + computerChoice + " beats " + firstCap);
    } else if (firstCap === "Paper" && computerChoice === "Scissors"){
        playerWin++
        return ("Winner! " + firstCap + " demolishes " + computerChoice);
    } else if(firstCap === "Scissors" && computerChoice === "Scissors"){
        return ("Tie! You selected " + firstCap + " and the computer selected " + computerChoice);
    } else if(firstCap === "Scissors" && computerChoice === "Rock"){
        computerWin++
        return ("Loser! " + computerChoice + " beats " + firstCap);
    } else {
        playerWin++
        return ("Winner! " + firstCap + " demolishes " + computerChoice);
    }
}
}
    
        if(playerWin > computerWin){
            gameWinner = "YOU WIN!";
        } else if(playerWin < computerWin){
            gameWinner = "YOU LOSE!";
        } else {
            gameWinner = "TIE!";
        }
        console.log(gameWinner);
        
    }


    
