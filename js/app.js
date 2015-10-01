
$(document).ready(function(){
	// Global variables to store maximum number to be generated and secret number
	var MAXVAL = 100;
	var SECRETNUM ='';
	
	window.onload = newGame;
	
	function newGame() {
		// Generate a number between 1 and 100
		SECRETNUM = Math.floor((Math.random() * MAXVAL) + 1);
		console.log("SECRETNUM = " + SECRETNUM);
	}
	
	/*function checkGuess() {
		var guessInput = document.getElementById('userGuess');
		var guess = guessInput.value;
		var absGuess = Math.abs(SECRETNUM - guess);
		
		if (absGuess >= 50) {
			// Ice Cold
			console.log("Ice Cold");
		} else if (absGuess>=30 && absGuess<50) {
			// Cold
			console.log("Cold");
		} else if (absGuess>=20 && absGuess<30) {
			// Warm
			console.log("Warm");
		} else if (absGuess>=10 && absGuess<20) {
			// Hot
			console.log("Hot");
		} else if (absGuess>=1 && absGuess<10) {
			// Very Hot
			console.log("Very Hot");
		} else if (absGuess == 0) {
			alert("Congratulations! \nYou guessed the correct number!");
			newGame();
		}
	}*/
	
	// New Game Button
	$('.new').click(function() {
		console.log("newGame() called...")
		newGame();
	});
	
	// Guess Button
	$('#guessButton').click(function(event) {
		event.preventDefault();
		console.log("Guess Button clicked...");	
		//checkGuess();
	});
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


