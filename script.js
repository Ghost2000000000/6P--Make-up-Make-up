// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/477da621-7af0-4e09-8e64-dc9af6967ae8/";
let cards = [
    "fileAsset.jpeg?v=1710435467110",
    "card-8.jpeg?v=1710435479229",
    "card-7.jpeg?v=1710435487144",
    "card-6.jpeg?v=1710435493058",
    "card-5.jpeg?v=1710435501362",
    "card-4.webp?v=1710435505413",
    "card-3.webp?v=1710435512708",
    "card-2.webp?v=1710435516273"


];


// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
         let audio = document.querySelector(".audio");
    audio.play();
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has " + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + url + card + ")' class='card'>");
        }
    }
    console.log("Now the deck has " + cards.length + "cards.");
    buttonDouble.style.color = "silver";

};

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    let i = 0;
    for (let card of cards) {
       game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + url + card + ")' id='" + i + "' class='card'>");
        i = i + 1;
         let audio = document.querySelector(".audio");
    audio.play();
    }
};
          
/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
    buttonFlip.style.color = "silver";
     let audio = document.querySelector(".audio");
    audio.play();
};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
// (document).click(function(event) {
//     // Get the id property of the clicked thing.
//     let clickedId = event.target.id;
// });