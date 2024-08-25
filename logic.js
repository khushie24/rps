let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const genCompChoice = () => {
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw,play again.";
     msg.style.backgroundColor = "#081b31";
};

const showWinner =(userWin , userChoice , computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win!, your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `you lose. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {
    
    const computerChoice = genCompChoice();
    

    if(userChoice === computerChoice){
        drawGame();

    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);

    }

};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");    
       // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
