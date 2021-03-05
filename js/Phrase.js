/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Builds and adds HTML elements to DOM according to the phrase in "this.phrase". 
   * '<li>' elements are styled accoring to their classes.
   */
  addPhraseToDisplay() {
    const phraseList = document.querySelector("#phrase ul");
    for(let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] === " ") {
        const characterList = `<li class="space"> </li>`;
        phraseList.insertAdjacentHTML('beforeend', characterList);
      } else {
        const characterList = `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
        phraseList.insertAdjacentHTML('beforeend', characterList);
      }
    }
  }

  /**
   * Takes a string(letter) parameter to check if it exists in "this.phrase". Returns
   * the result as true/false.
   * @param {string} letter 
   * @returns {boolean}
   */
  checkLetter(letter) {
    for(let i = 0; i < this.phrase.length; i++) {
      if(this.phrase[i] === letter) {
        return true;
      } 
      
    }
    return false;
  }

  /**
   * Takes in a string(letter) parameter and all the corresponding letters will be shown
   * on the game board by changing their classes.
   * @param {string} letter 
   */
  showMatchedLetter(letter) {
    const letterNodes = document.querySelectorAll(`.${letter}`);
    letterNodes.forEach(node => {
      node.classList.remove("hide");
      node.classList.add("show");
    });
  }

}