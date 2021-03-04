/* Treehouse FSJS Techdegree
* Project 4 - OOP Game App
* app.js */
let game = '';
const start = document.getElementById("btn__reset");
const keysDiv = document.getElementById("qwerty");
const keys = document.querySelectorAll(".key");
const tries = document.querySelectorAll(".tries img")

start.addEventListener('submit', function(e) {
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
});

keysDiv.addEventListener("submit", function(e) {
  if(e.target.tagName === "BUTTON") {
    game.handleInteraction(e.target);
  }
});

