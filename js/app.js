
$(document).ready(function(){
	// Global variables to store maximum number to be generated and secret number
	var MAXVAL = 100;
	var SECRETNUM ='';
	
	window.onload = function() {
		newGame();
	}
	
	function newGame() {
		// Generate a number between 1 and 100
		SECRETNUM = Math.floor((Math.random() * MAXVAL) + 1);
		console.log("SECRETNUM = " + SECRETNUM);
	}
	
	// New Game Button
	$('.new').click(function() {
		newGame();
	});
	
	// Guess Button
	$('#guessButton').click(function() {
		//console.log("Guess button pushed: SECRETNUM = " + SECRETNUM);
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


