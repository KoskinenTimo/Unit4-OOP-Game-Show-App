/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase ("JavaScript is the worlds most popular programming language"),
      new Phrase ("JavaScript is the programming language of the Web"),
      new Phrase ("JavaScript is easy to learn"),
      new Phrase ("This tutorial will teach you JavaScript from basic to advanced"),
      new Phrase ("With our Try it Yourself editor you can edit the source code and view the result")
      ];
    this.activePhrase = null;
    this.gameActive = true;
  }

  /**
   * 
   */
  startGame() {
    document.getElementById("overlay").style.display = "none"
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * 
   */
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
  }

  /**
   * 
   * @param {*} button 
   */
  handleInteraction(button) {
    button.disabled = true;
    if(!this.activePhrase.checkLetter(button.textContent)) {
      button.classList.add("wrong");
      this.removeLife();
    } else {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(button.textContent);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    }
  }

  /**
   * 
   */
  removeLife() {
    const tries = document.querySelectorAll(".tries img");
    tries[4 - this.missed].setAttribute("src", "images/lostHeart.png");
    this.missed++;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
   * 
   */
  checkForWin() {
    return !document.querySelectorAll(".hide").length;
  }

  /**
   * 
   * @param {*} win 
   */
  gameOver(win) {
    this.gameActive = false;
    const wins = document.getElementById("wins");
    const winsCount = parseInt(wins.textContent[wins.textContent.length - 1]);
    const losses = document.getElementById("losses");
    const lossesCount = parseInt(losses.textContent[losses.textContent.length - 1]);
    const message = document.getElementById("game-over-message");
    const overlay = document.getElementById("overlay");
    overlay.removeAttribute("class");
    if(win) {
      message.textContent = "YOU WON! CONGRATULATIONS!"      
      overlay.classList.add("win");
      wins.textContent = `Wins: ${winsCount + 1}`
    } else {
      message.textContent = "YOU LOST! BETTER LUCK NEXT TIME!"
      overlay.classList.add("lose");
      losses.textContent = `Losses: ${lossesCount + 1}`
    }
    overlay.style.display = "";
  }
}