/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

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

  checkLetter(letter) {
    for(let i = 0; i < this.phrase.length; i++) {
      if(this.phrase[i] === letter) {
        return true;
      } 
      
    }
    return false;
  }

  showMatchedLetter(letter) {
    const letterNodes = document.querySelectorAll(`.${letter}`);
    letterNodes.forEach(node => {
      node.classList.remove("hide");
      node.classList.add("show");
    });
  }

}