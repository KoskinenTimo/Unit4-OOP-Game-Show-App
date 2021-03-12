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
   * Starts the game by hiding starting overlay and calling for methods to get and build
   * the game board.
   */
  startGame() {
    console.log(this.phrases);
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Gets 1 phrase randomly from the list of phrase objects.
   */
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
  }

  /**
   * Takes a button element as parameter. This button content is checked and if the 
   * content exists on the phrase board, the corresponding letters are shown on board. 
   * If it doesn't exist, you lose one "heart". Checks after handling the letter-matching
   * for 'checkForWin()'(all letters on the board are shown).
   * @param {element} button 
   */
  handleInteraction(button) {
    
    if (button.disabled !== true) {
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
    button.disabled = true;
  }

  /**
   * Removes 1 life(heart) from the bar. Checks if there are hearts left, by checking 
   * 'this.missed' value. If no hearts left = 'this.missed' is 5 and 'this.gameOver(true)'. 
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
   * Checks if all letters on game board are revealed.
   */
  checkForWin() {
    return !document.querySelectorAll(".hide").length;
  }

  /**
   * Takes in a boolean which indicates if the game was won or lost. True = win, False = loss.
   * Starting screen overlay is displayed and score count is done according to the result. 
   * Also a message is added to the start screen that is different for win and loss.
   * @param {boolean} win 
   */
  gameOver(win) {
    this.gameActive = false;
    const wins = document.getElementById("wins");
    const winsCount = parseInt(wins.textContent[wins.textContent.length - 1]);
    const losses = document.getElementById("losses");
    const lossesCount = parseInt(losses.textContent[losses.textContent.length - 1]);
    const message = document.getElementById("game-over-message");
    const overlay = document.getElementById("overlay");
    const startBtn = document.getElementById("btn__reset");
    startBtn.removeAttribute("class");

    overlay.removeAttribute("class");
    if(win) {
      message.textContent = "YOU WON! CONGRATULATIONS!"      
      overlay.classList.add("win");
      wins.textContent = `Wins: ${winsCount + 1}`
      startBtn.classList.add("btn__resetwin");
    } else {
      message.textContent = "YOU LOST! BETTER LUCK NEXT TIME!"
      overlay.classList.add("lose");
      losses.textContent = `Losses: ${lossesCount + 1}`
      startBtn.classList.add("btn__reset");
    }
    overlay.style.display = "";
  }
}