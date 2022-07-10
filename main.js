// Rock Paper Scissors GAME

// Create an array to hold hand gestures

let hands = ["Rock", "Paper", "Scissors"]

//Create a function that will generate random hand gestures

function rps(){
  let randomNumber = Math.floor(Math.random()*3)
  return randomNumber
}
let randomNumber1 = rps()
let randomNumber2 = rps()
let player1 = hands[randomNumber1]
let player2 = hands[randomNumber2]

//Log out who wins
console.log("Player 1 Hand: " + player1)
console.log("Player 2 Hand: " + player2)

// Conditionals to see who wins
if (player1==="Rock" && player2==="Scissors"){
  console.log("Player 1 wins!")
} else if (player1==="Paper" && player2==="Rock"){
  console.log("Player 1 wins!")
} else if(player1==="Scissors" && player2==="Paper"){
  console.log("Player 1 wins!")
} else if (player1 === player2){
  console.log("We have a tie!")
} else {
  console.log("Player 2 Wins")
}
