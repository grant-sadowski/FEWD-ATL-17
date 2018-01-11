$(document).ready(function() {
	
	var score;

	$('#zero').click(setZero);
	$('#add5').click(addFive);
	$('#add10').click(addTen);
	$('#sub1').click(subtractOne);

	function setZero () {
		score = 0;
		$('#result').html(score);
	};

	function addFive () {
		score = score + 5;
		$('#result').html(score);
	};

	function addTen () {
		score = score + 10;
		$('#result').html(score);
	};

	function subtractOne () {
		score = score - 1;
		$('#result').html(score);
	};


});