
$(document).ready(function(){
	// Global variables to store maximum number to be generated and secret number
	var MAXVAL = 100;
	var SECRETNUM ='';
	
	window.onload = newGame;
	
	function newGame() {
		$('#guessList').empty();
		// Generate a number between 1 and 100
		SECRETNUM = Math.floor((Math.random() * MAXVAL) + 1);
		console.log("SECRETNUM = " + SECRETNUM);
	}
	
	function checkGuess(guessInput) {
		var guess = guessInput.value;
		var absGuess = Math.abs(SECRETNUM - guess);
		var guessTemp = '';
		
		if (absGuess >= 50) {
			// Ice Cold
			guessTemp = "Ice Cold";
			addGuess(guess, guessTemp);
		} else if (absGuess>=30 && absGuess<50) {
			// Cold
			guessTemp = "Cold";
			addGuess(guess, guessTemp);
		} else if (absGuess>=20 && absGuess<30) {
			// Warm
			guessTemp = "Warm";
			addGuess(guess, guessTemp);
		} else if (absGuess>=10 && absGuess<20) {
			// Hot
			guessTemp = "Hot";
			addGuess(guess, guessTemp);
		} else if (absGuess>=1 && absGuess<10) {
			// Very Hot
			guessTemp = "Very Hot";
			addGuess(guess, guessTemp);
		} else if (absGuess == 0) {
			alert("Congratulations! \nYou guessed the correct number!");
			newGame();
		}
	}
	
	// New Game Button
	$('.new').click(function() {
		newGame();
	});
	
	// Guess Button
	$('#guessButton').click(function(event) {
		var guessInput = document.getElementById('userGuess');
		
		// Test for input
		if (guessInput.value) {
			event.preventDefault();
			checkGuess(guessInput);
			$('#userGuess').val('');
		}
	
	});
	
	var addGuess = function (guess, guessTemp) {
		$('#guessList').prepend("<li>" + guess + ": " + guessTemp + "</li>");
	}
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


