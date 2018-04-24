var guessTotalShow = document.getElementById("guessTotalShow");


var cpuRandom = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var humanInput = "";
var guessTotal = 10;

cpuGuess = cpuRandom[Math.floor(Math.random() * cpuRandom.length)];
        console.log("Computer pressed: " + cpuGuess);

document.onkeyup = function(humanGuess) {
    humanInput = humanGuess.key;
      console.log("You pressed: " + humanInput);   
}

if (humanInput != cpuGuess) {
    guessTotal = (guessTotal - 1);
        console.log("You guessed");
}

