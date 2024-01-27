const choices = ["Rock","Paper","Scissor"]

let getComputerChoice = () => {
    rn = Math.random()
    
    let choice = () => {
        switch(true){
            case (rn > 0 && rn < 0.3):
                return choices[0]
            
            case (rn < 0.6):
                return choices[1]

            default:
                return choices[2]
        }
    }
    return choice()
}

let round = (num) => {

    console.log(`Round-${num} Start..`)
    
    let userChoice = window.prompt("Rock.. Paper.. Scissor...?")
    userChoice = userChoice.slice(0,1).toUpperCase() + userChoice.slice(1).toLowerCase()
    
    let ComputerChoice = getComputerChoice()

    let cmpr = (userChoice,ComputerChoice) => {
        if (userChoice === ComputerChoice){
            console.log(`${userChoice} VS ${ComputerChoice}, It's A Tie ,Try Again...🙄`)
            console.log("\n")
            return round(num)
        }

        if (userChoice === choices[0]){
            if (ComputerChoice === choices[2]) {
                console.log(`${userChoice} VS ${ComputerChoice}, You Win Round-${num}..😊`)
                console.log("\n")
                return "user"
            }
            else{
                console.log(`${userChoice} VS ${ComputerChoice}, You Lose Round-${num}..😔`)
                console.log("\n")
                return `computer`
            }
        }
        
        if (userChoice === choices[1]){
            if (ComputerChoice === choices[0]) {
                console.log(`${userChoice} VS ${ComputerChoice}, You Win Round-${num}..😊`)
                console.log("\n")
                return "user"
            }
            else{
                console.log(`${userChoice} VS ${ComputerChoice}, You Lose Round-${num}..😔`)
                console.log("\n")
                return `computer`
            }
        }
        
        if (userChoice === choices[2]){
            if (ComputerChoice === choices[1]) {
                console.log(`${userChoice} VS ${ComputerChoice}, You Win Round-${num}..😊`)
                console.log("\n")
                return "user"
            }
            else{
                console.log(`${userChoice} VS ${ComputerChoice}, You Lose Round-${num}..😔`)
                console.log("\n")
                return `computer`
            }
        }
    }
    return cmpr(userChoice,ComputerChoice)
}

let game = () => {
    console.log("\n")
    console.log("Rock Paper Sciossor, Best Of 5, Go...")
    console.log("\n")

    let userScore = 0
    let computerScore = 0

    for (let i = 1 ; i < 6; i++) {
        let Winner = round(i)
        if (Winner == "user"){
            userScore ++
        }
        else{
            computerScore ++
        }
    }

    if (userScore>computerScore) {
        return `${userScore} - ${computerScore}, You Win The Game`
    }
    else{
        return `${userScore} - ${computerScore}, You Lose The Game`
    }
}

console.log(game())