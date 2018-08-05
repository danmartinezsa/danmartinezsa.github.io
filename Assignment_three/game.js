var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;

theGame();

function theGame() {
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var rand = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;

	checkIfCorrect();

	function checkIfCorrect() {

		document.onkeyup = function(event) {
			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
			if (event.keyCode < 65 || event.keyCode > 90) {
				alert("Invalid Entry");
			} else if (yourGuess.indexOf(userChoice) >=0) {
				alert("You already guessed that!");

			} else if (userChoice === computerChoice) {
				setTimeout(function(){alert("You win!");}, 3000);
				wins = wins + 1;
				document.getElementById("your-wins").innerHTML = wins;

				resetGame();

			} else {
				guessesLeft = guessesLeft - 1;
				
				document.getElementById("guesses-left").innerHTML = guessesLeft; 
				yourGuess.push(userChoice); 

				document.getElementById("your-guesses").innerHTML = yourGuess;


				noGuessesLeft();
			}
		}
	}

	function resetGame() {
		guessesLeft = 9; 
		yourGuess = [];  
		document.getElementById("guesses-left").innerHTML = guessesLeft; 
		document.getElementById("your-guesses").innerHTML = yourGuess;    
		theGame(); 

	}

	function noGuessesLeft() {
		if (guessesLeft === 0) {
			console.log("YOU LOSE.");
			alert("YOU LOSE!");
			losses = losses + 1
			document.getElementById("your-losses").innerHTML = losses;

			resetGame();

		} else {
			console.log("Incorrect. Try again"); 
			checkIfCorrect();
		}

	}

}