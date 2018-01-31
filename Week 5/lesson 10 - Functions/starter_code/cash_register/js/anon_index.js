
var total = 0;

$('#entry').submit(function(event){

	event.preventDefault();

	var entry;
	var currency;

	entry = $('#newEntry').val();
	entry = parseFloat(entry);

	currency = function(number){

		var convertedCurrency = parseFloat(number);
		convertedCurrency = convertedCurrency.toFixed(2);

		convertedCurrency = '$' + convertedCurrency;

		return convertedCurrency;
	};

	$('#entries').append('<tr><td></td><td>'+currency(entry)+'</td></tr>');

	total += entry;

	$('#total').html(currency(total));
	$('#newEntry').val('');

});





