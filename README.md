# Unit4-OOP-Game-Show-App
Treehouse Unit 4 project 
_____________________________________________________________________________________________
'press enter' text and score board for the starting screen and info text below "qwerty" 
div is added and styled:
h3 {
  margin: 10px 5px;
  padding: 10px 5px;
}
#wins,
#losses  {
  background-color:SteelBlue;
  width: 120px;
  color: #fff;
  display: inline-block;
}
#score {
  display: flex;
  justify-content: center;
}

_____________________________________________________________________________________________
Added margin property for body to remove scrollbar from the original style:
body {
  margin: 0;
}

_____________________________________________________________________________________________
Reduced the phrase div width to make it easier to see without moving head on large screen.
body {
#phrase {
  width: 80%;
  margin: auto;
}

_____________________________________________________________________________________________
Change weight to bold for the letters on screen to increase visibility.
.letter {
  font-weight: bold;
}

_____________________________________________________________________________________________
Added the already existing style to btn__reset classes and made my own btn__resetwin when
a game was won.
.btn__reset,
.btn__resetwin {
}

.btn__reset:active,
.btn__resetwin:active {
}

.btn__reset {
  background: #f7a964;
}

.btn__resetwin {
  background: #50d15f;

}

.btn__reset:hover {
  background: #f7b77f;
}

.btn__resetwin:hover {
  background: #80d389;
}