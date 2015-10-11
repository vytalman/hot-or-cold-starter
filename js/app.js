
$(document).ready(function(){
	// Global variables to store maximum number to be generated and secret number
	var MAXVAL = 100;
	var SECRETNUM ='';
	
	window.onload = newGame;
	
	function newGame() {
		$('#guessList').empty();
		$('#count').text('0');
		// Generate a number between 1 and 100
		SECRETNUM = Math.floor((Math.random() * MAXVAL) + 1);
	}
	
	function processGuess(guessInput) {
		var guess = guessInput.value;
		
		if (guess >= 1 && guess <= MAXVAL) {
			var span = $('#count');
			
			span.text(Number(span.text()) + 1);
			checkGuess(guess);
		} else {
			alert("Please enter a number between 1 and " + MAXVAL + ".");
		}
	}
	
	function checkGuess(guess) {
		var absGuess = Math.abs(SECRETNUM - guess);
		var guessTemp = '';
		
		if (absGuess >= 50) {
			// Ice Cold
			guessTemp = "Ice Cold";
			addGuess(guess, guessTemp);
		} else if (absGuess>=30) {
			// Cold
			guessTemp = "Cold";
			addGuess(guess, guessTemp);
		} else if (absGuess>=20) {
			// Warm
			guessTemp = "Warm";
			addGuess(guess, guessTemp);
		} else if (absGuess>=10) {
			// Hot
			guessTemp = "Hot";
			addGuess(guess, guessTemp);
		} else if (absGuess>=1) {
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
			processGuess(guessInput);
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
