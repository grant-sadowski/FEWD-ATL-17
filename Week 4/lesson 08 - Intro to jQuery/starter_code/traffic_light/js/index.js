//Implement the red light using jQuery. Don't forget to add the script tags.


$(document).ready(function() {
	//alert('Hello World');

	$('#stopButton').click(illuminateRed);
	$('#slowButton').click(illuminateYellow);
	$('#goButton').click(illuminateGreen);


	function illuminateRed() {
		clearLights();
		$('#stopLight').css('background-color', 'red');
	}

	function illuminateYellow() {
		clearLights();
		$('#slowLight').css('background-color', 'yellow');
	}

	function illuminateGreen() {
		clearLights();
		$('#goLight').css('background-color', 'green');
	}

	function clearLights() {
		$('#traffic-light div').css('background-color', 'black');
	}

});