// Intro Elements
let intro = document.querySelector(".Intro");
let playButton = document.querySelector(".Intro button")


// Game Elements
let game = document.querySelector(".Game");

let availableChoices = document.querySelectorAll(".availableChoices img");

let playerScoreElement = document.querySelector(".Player .Score");
let computerScoreElement = document.querySelector(".Computer .Score");

let playerChoiceImg = document.querySelector(".scoresAndSelectedChoices .SelectedPlayerChoice");
let computerChoiceImg = document.querySelector(".scoresAndSelectedChoices .SelectedComputerChoice");


// End Screen ,Msg
let endScreen = document.querySelector(".endScreen");
let endScreenMsg = document.querySelector(".endScreen .endMessage");
let playAgainBtn = document.querySelector(".endScreen .playAgain")


playButton.addEventListener("click",
    () => {
        intro.classList.add("hide");
        game.classList.remove("hide");
    }
);

playAgainBtn.addEventListener("click",
    () => {
        endScreen.classList.add("hide")
        endScreenMsg.classList.remove("win")
        endScreenMsg.classList.remove("lose")

        game.classList.remove("hide")
    }
)

for (let i of availableChoices) {
    i.addEventListener("click",
        () => {

            let scores = startRound(i.getAttribute("alt"));

            if ( scores[0] > 4 || scores[1] > 4) {
                if (scores[0] > scores[1]) {
                    endScreenMsg.textContent = "You Win!";
                    endScreenMsg.classList.add("win");
                    
                } else{
                    endScreenMsg.textContent = "You Lose!";
                    endScreenMsg.classList.add("lose");
                }
                
                setTimeout(() => {
                    game.classList.add("hide");
                    endScreen.classList.remove("hide")

                    playerScoreElement.textContent = "0"
                    computerScoreElement.textContent = "0"
                }, 450);

            }
        }
    )
}


    
function getComputerChoice() {
    let rn = Math.floor(Math.random() * 3); 

    return availableChoices[rn];
}


function startRound(userChoice) {
    let playerScore = Number(playerScoreElement.textContent);
    let computerScore = Number(computerScoreElement.textContent);


    let computerChoiceElement = getComputerChoice();
    let computerChoice = computerChoiceElement.getAttribute("alt")

    playerChoiceImg.setAttribute("src",`img/${userChoice}.gif`)
    computerChoiceImg.setAttribute("src",`img/${computerChoice}.gif`)


    if (userChoice == "Scissor"){
        if (computerChoice == "Rock") {
            computerScoreElement.textContent = computerScore + 1

        } else if(computerChoice == "Paper"){
            playerScoreElement.textContent = playerScore + 1
        }
    }

    if (userChoice == "Rock"){
        if (computerChoice == "Paper") {
            computerScoreElement.textContent = computerScore + 1

        } else if(computerChoice == "Scissor") {
            playerScoreElement.textContent = playerScore + 1
        }
    }

    if (userChoice == "Paper"){
        if (computerChoice == "Scissor") {
            computerScoreElement.textContent = computerScore + 1

        } else if(computerChoice == "Rock"){
            playerScoreElement.textContent = playerScore + 1
        }
    }

    let newplayerScore = Number(playerScoreElement.textContent);
    let newcomputerScore = Number(computerScoreElement.textContent);

    return [newplayerScore,newcomputerScore]

}