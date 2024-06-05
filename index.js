
const arrayChoises = ["rock", "paper", "scissors"];
let userChoise = "";
let botChoise;
let playerOnePoints = 0;
let playerTwoPoints = 0;

// bots random button choise
function botsSelectedBtn() {
    if(botChoise === "rock"){
        document.getElementById("rock").classList.add("selected")
        setTimeout(() => {
            document.getElementById("rock").classList.remove("selected")
        }, 2500)
    } else if(botChoise === "paper"){
        document.getElementById("paper").classList.add("selected")
        setTimeout(() => {
            document.getElementById("paper").classList.remove("selected")
        }, 2500)
    } else if(botChoise === "scissors"){
        document.getElementById("scissors").classList.add("selected")
        setTimeout(() => {
            document.getElementById("scissors").classList.remove("selected")
        }, 2500)
    } else{
        console.log("Something went wrong.")
    }
}

// users button choise
function usersSelectedBtn() {
    if(userChoise === "rock"){
        document.getElementById("rock").classList.add("selected")
        setTimeout(() => {
            document.getElementById("rock").classList.remove("selected")
        }, 2500)
    } else if(userChoise === "paper"){
        document.getElementById("paper").classList.add("selected")
        setTimeout(() => {
            document.getElementById("paper").classList.remove("selected")
        }, 2500)
    } else if(userChoise === "scissors"){
        document.getElementById("scissors").classList.add("selected")
        setTimeout(() => {
            document.getElementById("scissors").classList.remove("selected")
        }, 2500)
    } else{
        console.log("Something went wrong.")
    }
}


const roundFinishMessage = document.createElement("h2")
// message if draw
function drawMessage() {
    roundFinishMessage.innerHTML = "Its a draw!";
    roundFinishMessage.style.color = "#fafafa";
    document.getElementById("message-div").appendChild(roundFinishMessage)
}

// message if p1 wins
function winMessage() {
    roundFinishMessage.innerHTML = "Player 1 wins!";
    roundFinishMessage.style.color = "#fafafa";
    document.getElementById("message-div").appendChild(roundFinishMessage)
}


// message if p2 wins
function loseMessage() {
    roundFinishMessage.innerHTML = "Player 2 wins!";
    roundFinishMessage.style.color = "#fafafa";
    document.getElementById("message-div").appendChild(roundFinishMessage)
}


// rock button clicked
document.getElementById("rock").addEventListener("click", () => {
    botChoise = arrayChoises[Math.floor(Math.random() * arrayChoises.length)];
    console.log(botChoise)
    userChoise = "rock";

    usersSelectedBtn()
    botsSelectedBtn()
    
    if(userChoise === botChoise){
        drawMessage()
        setTimeout(() => {
            roundFinishMessage.remove()
        }, 1750)
    } else if(botChoise === "paper"){
        loseMessage()
        playerTwoPoints++
        setTimeout(() => {
            roundFinishMessage.remove()
        }, 1750)
    } else if(botChoise === "scissors"){
        winMessage()
        playerOnePoints++
        setTimeout(() => {
            roundFinishMessage.remove()
        }, 1750)
    }
    document.getElementById("player-one-points").innerHTML = playerOnePoints
    document.getElementById("player-two-points").innerHTML = playerTwoPoints
})


// paper button clicked
document.getElementById("paper").addEventListener("click", () => {
    botChoise = arrayChoises[Math.floor(Math.random() * arrayChoises.length)];
    console.log(botChoise)
    userChoise = "paper";

    usersSelectedBtn()
    botsSelectedBtn()
    
    if(userChoise === botChoise){
        drawMessage()
        setTimeout(() => {
            roundFinishMessage.remove()
        }, 1750)
    } else if(botChoise === "rock"){
        winMessage()
        playerOnePoints++
        setTimeout(() => {
            roundFinishMessage.remove()
        }, 1750)
    } else if(botChoise === "scissors"){
        loseMessage()
        playerTwoPoints++
        setTimeout(() => {
            roundFinishMessage.remove()
        }, 1750)
    }
    document.getElementById("player-one-points").innerHTML = playerOnePoints
    document.getElementById("player-two-points").innerHTML = playerTwoPoints
})


// scissors button clicked
document.getElementById("scissors").addEventListener("click", () => {
    botChoise = arrayChoises[Math.floor(Math.random() * arrayChoises.length)];
    console.log(botChoise)
    userChoise = "scissors";

    usersSelectedBtn()
    botsSelectedBtn()

    if(userChoise === botChoise){
        drawMessage()
        setTimeout(() => {
            roundFinishMessage.remove()
        }, 1750)
    } else if(botChoise === "rock"){
        loseMessage()
        playerTwoPoints++
        setTimeout(() => {
            roundFinishMessage.remove()
        }, 1750)
    } else if(botChoise === "paper"){
        winMessage()
        playerOnePoints++   
        setTimeout(() => {
            roundFinishMessage.remove()
        }, 1750) 
    }
    document.getElementById("player-one-points").innerHTML = playerOnePoints
    document.getElementById("player-two-points").innerHTML = playerTwoPoints
})