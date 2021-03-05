/* Treehouse FSJS Techdegree
* Project 4 - OOP Game App
* app.js */

/////////////////////////////////////////////////
//  VARIABLES/SELECTORS
/////////////////////////////////////////////////

let game = '';
const startButton = document.getElementById("btn__reset");
const keysDiv = document.getElementById("qwerty");
const keys = document.querySelectorAll(".key");
const tries = document.querySelectorAll(".tries img")

/////////////////////////////////////////////////
//  LISTENERS
/////////////////////////////////////////////////

/**
 * Start a new game by clicking.
 */
startButton.addEventListener('click', start);

/**
 * Starts a new game by pressing enter, if there is no game currently active.
 */
document.addEventListener('keydown', function(e) {
  if(e.key === "Enter" && !game.gameActive) {
    start();
  }
});         

/**
 * Clicking on letter buttons activates their functionality.
 */
keysDiv.addEventListener("click", function(e) {
  if(e.target.tagName === "BUTTON") {
    game.handleInteraction(e.target);
  }
});

/**
 * Pressing qwerty buttons on keyboard activates the corresponding letter in game if the game is active.
 */
document.addEventListener('keydown', function(e) {
  if (game.gameActive) {
    keys.forEach(key => {
      if(key.textContent === e.key) {
        game.handleInteraction(key);
      }
    });
  }
}) 

/////////////////////////////////////////////////
//  FUNCTIONS
/////////////////////////////////////////////////

/**
 * Starts a new game and resets the "game board" from last game."
 */
function start() {
  document.querySelector("#phrase ul").innerHTML = '';    
  keys.forEach(key => {
    key.removeAttribute("class");
    key.classList.add("key");
    key.disabled = false;
  });
  tries.forEach(heart => {
    heart.setAttribute("src", "images/liveHeart.png");
  });
  game = new Game();
  game.startGame();
}
