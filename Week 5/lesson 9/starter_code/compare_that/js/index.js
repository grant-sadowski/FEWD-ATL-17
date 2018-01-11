$(document).ready(function() {
	
	var operator;
	var numberA;
	var numberB; 

	$('#submit').click(compareNow);


	function compareNow () {
		
		numberA = $('#a').val();
		numberB = $('#b').val();
		
		if (numberA > numberB) {
			operator = '>';
		} 
		else if (numberA < numberB) {
			operator = '<';
		}
		else if (numberA = numberB) {
			operator = '=';
		}
		else {
			operator = 'N/A';
		}

		$('#comparison').html(operator);
	}





});