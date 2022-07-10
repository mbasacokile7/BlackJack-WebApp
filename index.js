// BlackJack Logic
// An array in JS is like a List in Python. Same thing. Personal Note.
//Arrays : Ordered Lists of items

// Objects are like dictionaries in Python. Basically a key-value pair used to store data.

let firstNum = 0;
let secondNum = 0;
let cards = 0;
let sum = 0;
let isBlackJack = false;
let isAlive = true;

let message = " ";
let messageElement = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

function getRandomCard_1(){
  let randomNumber_1 = Math.floor((Math.random()*10)+2);
  return randomNumber_1
}
function getRandomCard_2(){
  let randomNumber_2 = Math.floor((Math.random()*10)+2);
  return randomNumber_2
}
function getRandomCard_3(){
  let randomNumber_3 = Math.floor((Math.random()*10)+2);
  return randomNumber_3
}

function startGame(){

  //let namPlayer = prompt("Please Enter your name");
  //let betsAmount = prompt("Please place your bet");
  let player ={
    name:"Mbasa",   //namPlayer,
    bet: 200       //betsAmount
  }

  let playerInfo = document.getElementById("player-el")
  playerInfo.textContent = player.name + ": R" + player.bet
  firstNum = getRandomCard_1();
  secondNum = getRandomCard_2();
  sum = firstNum + secondNum;
  cards = [firstNum, secondNum];

  renderGame()
}

function renderGame(){
  cardsEl.textContent = "Cards: "
  for (let i = 0 ; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20){
    message = "You are still in the game. Would you like to get a hit?"
  }else if(sum ===21){
    message = "You got BlackJack"
    isBlackJack = true;
  }else{
    message = "You are out of the game"
    isAlive = false;
  }
  messageElement.textContent = message
}

let newCardBtn = document.getElementById("ncard-btn")
function newCard(){
  if (isAlive === true && isBlackJack===false){
    let new_Card = getRandomCard_3();
    sum += new_Card;
    cards.push(new_Card)
    console.log(cards)
    renderGame()
  }
}
