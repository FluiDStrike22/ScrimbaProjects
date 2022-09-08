
let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;   // to check game state
let message = "";   // to store the string you want to show to the user.
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el"); 
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")
let player = {
  name : "Adi",
  chips : 100
}




function startGame() {
  isAlive = true;
  let firstCard = Math.floor(Math.random() * (11-2+1) + 2);
  let secondCard = Math.floor(Math.random() * (11-2+1) + 2);
  cards.push(firstCard,secondCard);
  sum = firstCard + secondCard;
  
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: ";
  playerEl.textContent = player.name + " : $" + player.chips;
  for (let i=0; i <cards.length;i++){
    cardsEl.textContent += " " + cards[i];
  }
  
  if(sum <= 20) {
    messageEl.textContent = "Do you want a new card?";
  } else if (sum === 21) {
    messageEl.textContent = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    messageEl.textContent = "You're out of the game!";
    isAlive = false;
  }
  console.log(messageEl.textContent);
}


function newCard() {
  if(isAlive && hasBlackJack === false){
    let newCard = Math.floor(Math.random() * (11-2+1) + 2);
    sum += newCard;
    cards.push(newCard);
    renderGame();
  } 


}

