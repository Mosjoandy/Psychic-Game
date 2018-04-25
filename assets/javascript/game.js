var cpuRandom = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var humanInput = "";
var guessTotal = 9;
var lossTotal = 0;
var winTotal = 0;
var humanAttempts = [];

cpuGuess = cpuRandom[Math.floor(Math.random() * cpuRandom.length)];
        console.log("Computer pressed: " + cpuGuess);

document.onkeyup = function(humanGuess) {
    humanInput = humanGuess.key;
    console.log("You pressed: " + humanInput);  
 

        if (humanInput != cpuGuess) {
            guessTotal = (guessTotal-1);
            console.log("You have " + guessTotal +" left");
            document.getElementById("guessTotalShow").innerHTML = (guessTotal);
            humanAttempts.push(humanInput);
            document.getElementById("humanGuesses").innerHTML = (humanAttempts);

            
            if (guessTotal === 0) {
                lossTotal = (lossTotal+1);
                console.log("increasetheloss");
                document.getElementById("lossTotalShow").innerHTML = (lossTotal);
                guessTotal = 9;

                humanAttempts = [];
                document.getElementById("humanGuesses").innerHTML = humanAttempts;
            }

            
        }

        else if (humanInput === cpuGuess) {
            winTotal = (winTotal+1);
            console.log("increasethewin");
            document.getElementById("winTotalShow").innerHTML = (winTotal);
            guessTotal = (guessTotal=9);

            humanAttempts = [];
            document.getElementById("humanGuesses").innerHTML = humanAttempts;

            cpuGuess = cpuRandom[Math.floor(Math.random() * cpuRandom.length)];
            console.log("Computer pressed: " + cpuGuess);
        }
}





