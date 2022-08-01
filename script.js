const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();



//player inputs choice

function getPlayerChoice() {
    return prompt('Enter your choice').toLowerCase();
}

// ramdom computer slection
function getComputerChoice() {
    const rockPaperScissors = Math.floor(Math.random()* 3);
        if (rockPaperScissors % 3 === 0) {
            return('rock');
        }

        else if (rockPaperScissors % 3 === 1 ) {
            return('scissors');
        }
        
        else {
            return('paper');
        }
        
}
//play a round of Rock Paper Scissors

function playRound(playerSelection,computerSelection){
    if (computerSelection == "rock" && playerSelection == "rock" || computerSelection == "paper" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "scissors") {
        return tieGame;
    }
        else if (computerSelection== "rock" && playerSelection=="scissors" || computerSelection== "scissors" && playerSelection == "paper" || computerSelection=="paper" && playerSelection=="rock") {
            return computerWinRound;
        }
        else if (computerSelection=="rock" && playerSelection=="paper" || computerSelection == "paper" && playerSelection=="scissors" || computerSelection=="scissors" && playerSelection=="rock") {
            return playerWinRound;
        }
        else{
            return "error";
        }
}
//score variables
let playerScore = 0 ;
let computerScore = 0;
let catsGame = 0;
//alerts for winner/tie
let playerWinRound = "You Won!!";
let computerWinRound = "computer Wins!";
let tieGame = "Cats Game no one wins";



for (let i = 0; i<20; i++) {
    let playerAnswer = getPlayerChoice();
    const computerAnswer = getComputerChoice();
    let roundResults = playRound(playerAnswer,computerAnswer);
        console.log(roundResults);
    gameScore(roundResults);
        console.log("Your score is " + playerScore);
        console.log("The computer's score is " + computerScore);

    if (playerScore === 5 || computerScore === 5) {
            break;
            }
            


//Keeps score and prints out correct messages based on score
function gameScore(result) {

  if (result === playerWinRound) {
    playerScore++;
  } else if (result === catsGame) {
    catsGame++;
  } else {
    computerScore++;
  }
  if (playerScore === 5) {
    console.log(playerWinRound);
    return;
  }
  if (computerScore === 5) {
    console.log(computerWinRound);
    return;
  }
}

    
    }