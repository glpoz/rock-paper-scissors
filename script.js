let playerSelection = "";
let computerSelection = "";
let playerWins = 0;
let computerWins = 0;
let elemH1 = "";
let textH1 = "";
let started = 0;
document.getElementById("startbtn").addEventListener("click", starting);
document.getElementById("rockbtn").addEventListener("click", rockButtonFunc);
document.getElementById("paperbtn").addEventListener("click", paperButtonFunc);
document.getElementById("scissorsbtn").addEventListener("click", scissorsButtonFunc);

function singleRound() {
    
    let randNum = Math.floor(Math.random() * Math.floor(3))
    if (randNum == 0) {
        computerSelection = 'ROCK';
    }
    else if (randNum == 1) {
        computerSelection = 'PAPER';
    }
    else {
        computerSelection = 'SCISSORS';
    }

    if (playerSelection == 'ROCK' && computerSelection == 'ROCK') {
        elemTie = document.createElement("h3");
        textTie = document.createTextNode("You both chose "+playerSelection+ ", It is a tie!");
        elemTie.appendChild(textTie);
        main.appendChild(elemTie);
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        elemCwin = document.createElement("h3");
        textCwin = document.createTextNode(computerSelection + " beats "+playerSelection+", you lost this round!");
        elemCwin.appendChild(textCwin);
        main.appendChild(elemCwin);
        computerWins++
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        elemPwin = document.createElement("h3");
        textPwin = document.createTextNode(playerSelection + " beats " + computerSelection + ", you won this round!");
        elemPwin.appendChild(textPwin);
        main.appendChild(elemPwin);
        playerWins++
        console.log(playerWins)
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        elemPwin = document.createElement("h3");
        textPwin = document.createTextNode(playerSelection + " beats " + computerSelection + ", you won this round!");
        elemPwin.appendChild(textPwin);
        main.appendChild(elemPwin);
        playerWins++

    }
    else if (playerSelection == 'PAPER' && computerSelection == 'PAPER') {
        elemTie = document.createElement("h3");
        textTie = document.createTextNode("You both chose "+playerSelection+ ", It is a tie!");
        elemTie.appendChild(textTie);
        main.appendChild(elemTie);
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        elemCwin = document.createElement("h3");
        textCwin = document.createTextNode(computerSelection + " beats "+playerSelection+", you lost this round!");
        elemCwin.appendChild(textCwin);
        main.appendChild(elemCwin);
        computerWins++

    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        elemCwin = document.createElement("h3");
        textCwin = document.createTextNode(computerSelection + " beats "+playerSelection+", you lost this round!");
        elemCwin.appendChild(textCwin);
        main.appendChild(elemCwin);
        computerWins++

    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        elemPwin = document.createElement("h3");
        textPwin = document.createTextNode(playerSelection + " beats " + computerSelection + ", you won this round!");
        elemPwin.appendChild(textPwin);
        main.appendChild(elemPwin);
        playerWins++

    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
        elemTie = document.createElement("h3");
        textTie = document.createTextNode("You both chose "+playerSelection+ ", It is a tie!");
        elemTie.appendChild(textTie);
        main.appendChild(elemTie);
    }
    

}


function starting() {

    if (started == 0) {
        elemH1 = document.createElement("h1");
        textH1 = document.createTextNode("First to get 5 points wins. Good luck!");
        elemH1.appendChild(textH1);
        main.appendChild(elemH1);
    
        elemP1 = document.createElement("p");
        textP1 = document.createTextNode("Player point: " + playerWins);
        elemP1.appendChild(textP1);
        main.appendChild(elemP1);

        elemP2 = document.createElement("p");
        textP2 = document.createTextNode("Computer point: " + computerWins);
        elemP2.appendChild(textP2);
        main.appendChild(elemP2);

        elemH2 = document.createElement("h2");
        textH2 = document.createTextNode(" ");
        elemH2.appendChild(textH2);
        result.appendChild(elemH2);

        elemH3 = document.createElement("h2");
        textH3 = document.createTextNode(" ");
        elemH3.appendChild(textH3);
        result.appendChild(elemH3);
        
        elemPchoice = document.createElement("h4");
        textPchoice = document.createTextNode(" ");
        elemPchoice.appendChild(textPchoice);
        main.appendChild(elemPchoice);
        
        elemCchoice = document.createElement("h4");
        textCchoice = document.createTextNode(" ");
        elemCchoice.appendChild(textCchoice);
        main.appendChild(elemCchoice);
        
        elemPwin = document.createElement("h3");
        textPwin = document.createTextNode(" ");
        elemPwin.appendChild(textPwin);
        main.appendChild(elemPwin);        
        
        elemCwin = document.createElement("h3");
        textCwin = document.createTextNode(" ");
        elemCwin.appendChild(textCwin);
        main.appendChild(elemCwin);
        
        elemTie = document.createElement("h3");
        textTie = document.createTextNode(" ");
        elemTie.appendChild(textTie);
        main.appendChild(elemTie);
        
        started = 1;
    }

    else {
        computerWins=0;
        playerWins=0;
        textP1.nodeValue = "Player point: " + playerWins;
        textP2.nodeValue = "Computer point: " + computerWins;
        textPwin.nodeValue = " ";
        textCwin.nodeValue = " ";
        textTie.nodeValue = " ";
        textPchoice.nodeValue = " ";
        textCchoice.nodeValue = " ";

        if (textH2 != " ") {
            textH2.nodeValue = " ";
        }
        if (textH3 != " ") {
            textH3.nodeValue = " ";
        }
    }
}

function rockButtonFunc() {
    if (playerWins < 5 && computerWins < 5) {
        playerSelection = "ROCK";
        textPwin.nodeValue = " ";
        textCwin.nodeValue = " ";
        textTie.nodeValue = " ";
        singleRound();
        textP1.nodeValue = "Player point: " + playerWins;
        textP2.nodeValue = "Computer point: " + computerWins;
        textPchoice.nodeValue = "You chose: " + playerSelection;
        textCchoice.nodeValue = "Computer chose: " + computerSelection;
    }
    if (playerWins == 5) {
        textH2.nodeValue = "You win, congratulations!"
    }

    else if (computerWins == 5) {
        textH3.nodeValue = "Computer wins, thanks for playing!"
    }
 
}

function paperButtonFunc() {
    if (playerWins < 5 && computerWins < 5) {
        playerSelection = "PAPER";
        textPwin.nodeValue = " ";
        textCwin.nodeValue = " ";
        textTie.nodeValue = " ";
        singleRound();
        textP1.nodeValue = "Player point: " + playerWins;
        textP2.nodeValue = "Computer point: " + computerWins;
        textPchoice.nodeValue = "You chose: " + playerSelection;
        textCchoice.nodeValue = "Computer chose: " + computerSelection;
    }
    if (playerWins == 5) {
        textH2.nodeValue = "You win, congratulations!"
    }
    else if (computerWins == 5) {
        textH3.nodeValue = "Computer wins, thanks for playing!"
    }
}

function scissorsButtonFunc() {
    if (playerWins < 5 && computerWins < 5) {
        playerSelection = "SCISSORS";
        textPwin.nodeValue = " ";
        textCwin.nodeValue = " ";
        textTie.nodeValue = " ";
        singleRound();
        textP1.nodeValue = "Player point: " + playerWins;
        textP2.nodeValue = "Computer point: " + computerWins;
        textPchoice.nodeValue = "You chose: " + playerSelection;
        textCchoice.nodeValue = "Computer chose: " + computerSelection;
    }
    if (playerWins == 5) {
        textH2.nodeValue = "You win, congratulations!"
    }
    else if (computerWins == 5) {
        textH3.nodeValue = "Computer wins, thanks for playing!"
    }
}