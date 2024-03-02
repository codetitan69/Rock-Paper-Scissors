let introSection = document.querySelector(".Intro");
let introSectionPlayButton = document.querySelector(".Intro button");

let gameSection = document.querySelector(".Game");

let endScreen = document.querySelector(".endScreen");
let endMsg = document.querySelector(".endScreen .endMessage");
let playAgainBtn = document.querySelector(".endScreen .playAgain");

function startGame() {
    let userScore = document.querySelector(".Player .Score");
    let computerScore = document.querySelector(".Computer .Score");

    let userChoiceList = document.querySelectorAll(".availableChoices img");

    let userChoiceDisplay = document.querySelector(".SelectedPlayerChoice");
    let computerChoiceDisplay = document.querySelector(".SelectedComputerChoice");


    for (let i of userChoiceList) {
        i.addEventListener("click",
        () => {
            gameRound(i.getAttribute("alt"))
        }
        )
    }


    function getComputerChoice(ChoiceList) {
        let rn = Math.floor((Math.random() * 3))

        return ChoiceList[rn]
    }
    

    function gameRound(userChoice){
        let computerChoice = getComputerChoice(userChoiceList).getAttribute("alt");

        userChoiceDisplay.setAttribute("src",`img/${userChoice}.gif`);
        computerChoiceDisplay.setAttribute("src",`img/${computerChoice}.gif`);

        if (userChoice == "Rock") {
            if (computerChoice == "Paper") {
                computerScore.textContent = Number(computerScore.textContent) + 1
            }else if(computerChoice == "Scissor"){
                userScore.textContent = Number(userScore.textContent) + 1
            }
        }

        if (userChoice == "Paper") {
            if (computerChoice == "Scissor") {
                computerScore.textContent = Number(computerScore.textContent) + 1
            }else if(computerChoice == "Rock"){
                userScore.textContent = Number(userScore.textContent) + 1
            }
        }

        if (userChoice == "Scissor") {
            if (computerChoice == "Rock") {
                computerScore.textContent = Number(computerScore.textContent) + 1
            }else if(computerChoice == "Paper"){
                userScore.textContent = Number(userScore.textContent) + 1
            }
        }

        if (Number(computerScore.textContent) > 4 || Number(userScore.textContent) > 4) {

            if (Number(userScore.textContent) > Number(computerScore.textContent)){
                endMsg.textContent = "You Win!"
                endMsg.classList.toggle("win")
            }else{
                endMsg.textContent = "You Lose!"
                endMsg.classList.toggle("lose")
            }

            setTimeout(() => { 
            gameSection.classList.toggle("hide");

            userScore.textContent = 0;
            computerScore.textContent = 0;
            userChoiceDisplay.setAttribute("src",``);
            computerChoiceDisplay.setAttribute("src",``);
            
            endScreen.classList.toggle("hide");
            },500)

        }
    }
}

introSectionPlayButton.addEventListener("click",
    () => {
        introSection.classList.toggle("hide");
        gameSection.classList.toggle("hide");
        startGame()
    }
)

playAgainBtn.addEventListener("click",
    () => {
        endMsg.textContent = ""
        endMsg.classList.remove("win")
        endMsg.classList.remove("lose")
        
        gameSection.classList.toggle("hide");
        endScreen.classList.toggle("hide");

        startGame()
    }
)