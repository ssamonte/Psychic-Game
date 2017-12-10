
// array of alaphabets
var alphabet = ["a", "b", "c", "d","e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// computer selects letter
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);

// user guesses letter then determines if it matches the computer
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
      wins++;
    }   else {
      guessesLeft -- ;
    }
    if(guessesLeft === 0){
      losses++;
    };

// calculates the score
document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
// document.getElementById('guessesMade').innerHTML = "Guesses Made: " + guessesMade;