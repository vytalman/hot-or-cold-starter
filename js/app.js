
$(document).ready(function(){
	// Global variable to store maximum number to be generated
	MAXVAL = 100;
	
	window.onload = function() {
		newGame();
	}
	
	function newGame() {
		// Generate a number between 1 and 100
		var secretNum = Math.floor((Math.random() * MAXVAL) + 1);
		console.log("secretNum = " + secretNum);
		
		return secretNum;
	}
	
	// New Game Button
	$('.new').click(function() {
		newGame();
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


