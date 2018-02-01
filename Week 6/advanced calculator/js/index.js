$(document).ready(function() {

	var value1 = 0;
	var value2 = 0;
	var operator;
	var tempVal;
	var result;

	$('.num-btn').click(doMath);
	$('.operator-btn').click(findSecond);
	$('#submit').click(findSolution);
	$('#clear').click(clearDisplay);


	function doMath(event) {

		//Get temporary value from button

		tempVal = $(this).val();
		// console.log(tempVal);

		//Concatenate this number to the variable value1

		value1 += tempVal;

		if (value1.charAt(0) == '0') {
			value1 = value1.substring(1,value1.length);
		}

		//Display value1

		$('#answer').html(value1);
	}

	function findSecond(event) {

		operator = $(this).val();
		$(this).css('background', 'orange');

		value2 = value1;
		value1 = 0;

		$('#answer').html('');
	}

	function findSolution(event) {

		value2 = parseInt(value2);
		value1 = parseInt(value1);

		$('#answer').html('');
		$('.operator-btn').css('background', 'white');


		if (operator == 'plus') {
			result = value1 + value2;
		}
		else if (operator == 'minus') {
			result = value1 - value2;
		}
		else if (operator == 'multiply') {
			result = value1 * value2;		
		}
		else {
			result = value1 / value2;
		}

		$('#answer').html(result);
	}

	function clearDisplay(event) {
		value1 = 0;
		value2 = 0;
		tempVal = 0;
		operator = '';
		result = 0;
		$('.operator-btn').css('background', 'white');
		$('#answer').html('');
	}

});