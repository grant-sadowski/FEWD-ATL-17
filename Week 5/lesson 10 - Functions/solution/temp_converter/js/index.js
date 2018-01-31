$('#form-temp').on('submit',function(e){

	e.preventDefault();

	var tempC = $('#celsiusTemp').val();
	tempC = parseInt(tempC);

	tempF = tempC * 9/5 + 32;

	$('#farenheitTemp').html(tempF);

	howDoesItFeel(tempC);

	$('#celsiusTemp').val('');

});

function howDoesItFeel(number) {
	if (number <= 65){
		$('body').removeClass('orange yellow red');
		$('body').addClass('blue'); 
	}else if(number > 65 && number <= 85){
		$('body').removeClass('orange red blue');
		$('body').addClass('yellow');
	}else if(number > 85 && number <= 95){
		$('body').removeClass('red yellow blue');
		$('body').addClass('orange');
	}else{
		$('body').removeClass('orange yellow blue');
		$('body').addClass('red');
	}
}