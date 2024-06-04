
const arrayChoises = ["rock", "paper", "scissors"];
let randomChoise = arrayChoises[Math.floor(Math.random() * arrayChoises.length)];
let userChoise = "";
const roundFinishMessage = document.createElement("h3")

console.log(randomChoise)

function controlOfGame() {
    if(randomChoise === "rock"){
        document.getElementById("rock").classList.add("selected")
        if(userChoise === "rock"){
            let roundMessage = document.createTextNode("It's a draw")
            roundFinishMessage.appendChild(roundMessage)
            let messageDiv = document.getElementById("message-div")
            document.body.insertBefore(roundFinishMessage, messageDiv)
            setTimeout(() => {
                messageDiv.remove()
            }, 3000)
        } else if(userChoise === "paper"){
            let roundMessage = document.createTextNode("Paper wins Rock")
            roundFinishMessage.appendChild(roundMessage)
            let messageDiv = document.getElementById("message-div")
            document.body.insertBefore(roundFinishMessage, messageDiv)
            setTimeout(() => {
                messageDiv.remove()
            }, 3000)
        } else if(userChoise === "scissors"){
            let roundMessage = document.createTextNode("Rock wins Scissors")
            roundFinishMessage.appendChild(roundMessage)
            let messageDiv = document.getElementById("message-div")
            document.body.insertBefore(roundFinishMessage, messageDiv)
            setTimeout(() => {
                messageDiv.remove()
            }, 3000)
        }
    }
}


document.getElementById("rock").addEventListener("click", () => {
    document.getElementById("rock").classList.add("selected")
    document.getElementById("paper").classList.add("not-selected")
    document.getElementById("scissors").classList.add("not-selected")
    userChoise = "rock";
    
controlOfGame()
})


