
var temperatureC = 0;
var phrase;

$('#convertBtn').click(convertTemp);

function convertTemp(event) {

	event.preventDefault();

	temperatureC = $('#celcius').val();
	
	temperatureC = parseInt(temperatureC);

	var temperatureF = (temperatureC * (9/5)) + 32;

	temperatureF = temperatureF.toFixed(2);


	console.log(temperatureF);

	if(temperatureF <= 65) {
		phrase = 'Chilly';
		$('#temperatureBox').css('background','blue');
		$('#tempPhrase').html(phrase);
		$('#tempPhrase').css('color','blue');
	}
	else if (temperatureF > 65 && temperatureF < 85) {
		phrase = 'Warm';
		$('#temperatureBox').css('background','yellow');
		$('#tempFeel').css('color','black');
		$('#tempPhrase').html(phrase);
		$('#tempPhrase').css('color','yellow');		
	}
	else if (temperatureF >= 85 && temperatureF < 95) {
		phrase = 'Gettin sweaty';
		$('#temperatureBox').css('background','orange');
		$('#tempPhrase').html(phrase);
		$('#tempPhrase').css('color','orange');

	}
	else if (temperatureF >= 95) {
		phrase = 'Go inside...';
		$('#temperatureBox').css('background','red');
		$('#tempPhrase').html(phrase);
		$('#tempPhrase').css('color','red');		
	}

	temperatureC = temperatureC + ' &deg;C';
	temperatureF = temperatureF + ' &deg;F';

	$('#tempFeel').html(temperatureC+'<br>'+'is equal to'+'<br>'+temperatureF);

	$('#celcius').val('');
}