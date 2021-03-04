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

startButton.addEventListener('click', start);

document.addEventListener('keydown', function(e) {
  if(e.key === "Enter" && !game.gameActive) {
    start();
  }
});         

keysDiv.addEventListener("click", function(e) {
  if(e.target.tagName === "BUTTON") {
    game.handleInteraction(e.target);
  }
});

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
