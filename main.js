/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

// Build a 'master' deck of 'card' objects used to create shuffled decks
const masterDeck = buildMasterDeck();

//Displays Master Deck on DOM
// renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
let shuffledDeck;
let rounds = 5;
let player1;
let player2;
/*----- cached element references -----*/
const shuffledContainer = document.getElementById('shuffled-deck-container');


/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', renderNewShuffledDeck);
document.querySelector('.cardBack1').addEventListener('click', drawNewCard);


/*----- functions -----*/
function getNewShuffledDeck() {
  // Create a copy of the masterDeck (leave masterDeck untouched!)
  const tempDeck = [...masterDeck];
  const newShuffledDeck = [];
  while (tempDeck.length) {
    // Get a random index for a card still in the tempDeck
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
    newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return newShuffledDeck;
}

function drawNewCard() {
console.log()

}

function renderNewShuffledDeck() {
  // Create a copy of the masterDeck (leave masterDeck untouched!)
  // shuffledDeck = getNewShuffledDeck();
  // renderDeckInContainer(shuffledDeck, shuffledContainer);
}

function renderDeckInContainer(deck, container) {
  container.innerHTML = '';
  // Let's build the cards as a string of HTML
  // let cardsHtml = '';
  // deck.forEach(function(card) {
  //   cardsHtml += `<div class="card ${card.face}"></div>`;
  // });
  // Or, use reduce to 'reduce' the array into a single thing - in this case a string of HTML markup 
  const cardsHtml = deck.reduce(function(html, card) {
    return html + `<div class="card ${card.face}"></div>`;
  }, '');
  container.innerHTML = cardsHtml;
}

function buildMasterDeck() {
  const deck = [];
  // Use nested forEach to generate card objects
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({
        // The 'face' property maps to the library's CSS classes for cards
        face: `${suit}${rank}`,
        // Setting the 'value' property for game of blackjack, not war
        value: Number(rank) || (rank === 'A' ? 11 : 10)
      });
    });
  });
  return deck;
}



renderNewShuffledDeck();


//Game function that runs game in the beginning of game
// function startGame() {

// }

//One player function (apply DOM query (html))
const deckEl = document.querySelector('cardBack1');
console.log(deckEl, 'It Worked!')
//One AI function

//Make conditional statement for round increments */
function changeRound(){
  rounds = rounds -1
return rounds
}
changeRound()
console.log(rounds, " <- rounds");
//Function where players card is compared to AI card (If statement)