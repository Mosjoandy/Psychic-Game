var guessTotalShow = document.getElementById("guessTotalShow");
var lossTotalShow = document.getElementById("lossTotalShow");
var winTotalShow = document.getElementById("winTotalShow");

var cpuRandom = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var humanInput = "";
var guessTotal = 9;
var lossTotal = 0;
var winTotal = 0;

cpuGuess = cpuRandom[Math.floor(Math.random() * cpuRandom.length)];
        console.log("Computer pressed: " + cpuGuess);

document.onkeyup = function(humanGuess) {
    humanInput = humanGuess.key;
    console.log("You pressed: " + humanInput);   

        if (humanInput != cpuGuess) {
            guessTotal = (guessTotal-1);
            console.log(guessTotal);
            document.getElementById("guessTotalShow").innerHTML = (guessTotal);

            if (guessTotal === 0) {
                lossTotal = (lossTotal+1);
                console.log("increasetheloss");
                document.getElementById("lossTotalShow").innerHTML = (lossTotal);
                guessTotal = (guessTotal+9);
            }
        }

        if (humanInput === cpuGuess) {
            winTotal = (winTotal+1);
            console.log("increasethewin");
            document.getElementById("winTotalShow").innerHTML = (winTotal);
            guessTotal = (guessTotal+9);
        }
}





