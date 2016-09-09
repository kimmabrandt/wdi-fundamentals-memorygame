var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


var gameBoard = document.getElementById('game-board');
var listCards = document.getElementsByClassName('card');

function createBoard() {
  for (var i=0; i<cards.length; i++){
    var createCard = document.createElement('div');
    createCard.className = 'card';
    gameBoard.appendChild(createCard);
  }
}


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

for (var i = 0; i< cards.length; i++) {
    // this will set the card's 'data-card' to be the element of the array
  cardElement.setAttribute('data-card', cards[i]);
  
    // when a card is clicked the function isTwoCards will be executed
  cardElement.addEventListener('click', isTwoCards)
}



// test if two cards in play are a match
function isMatch(cards) {
  if (cardTwo === cardFour) {
window.alert("Sorry, try again.");
}
else if (cardOne === cardTwo) {
	window.alert("You found a match!");
}
else if (cardThree === cardFour) {
	window.alert("You found a match!")
}
}

// test if two cards are in play
function isTwoCards() {
  
  // add card to array of cards in play 
  //(this gives access to the card the user clicked on)
  cardsInPlay.push(this.getAttribute('data-card'));
  
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
}




/*
if (cardTwo === cardFour) {
window.alert("Sorry, try again.");
}
else if (cardOne === cardTwo) {
	window.alert("You found a match!");
}
else if (cardThree === cardFour) {
	window.alert("You found a match!")
}

*/