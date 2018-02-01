$(document).ready(function() {

	var firstNumber;
	var secondNumber;
	var operator;
	var result;

	// alert('Hey!');


	$('#submit-btn').click(doMath);


	function doMath(event) {

		event.preventDefault();

		firstNumber = $('#first-number').val();
		firstNumber = parseInt(firstNumber);

		secondNumber = $('#second-number').val();
		secondNumber = parseInt(secondNumber);

		operator = $('#operator').val();


		if (operator == 'plus') {
			result = firstNumber + secondNumber;
		}
		else if (operator == 'minus') {
			result = firstNumber - secondNumber;
		}
		else if (operator == 'multiply') {
			result = firstNumber * secondNumber;		
		}
		else {
			result = firstNumber / secondNumber;
		}

		$('#answer').html(result);

	}

});