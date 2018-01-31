
var total = 0;

$('#entry').submit(updateReceipt);

function updateReceipt(event) {

	event.preventDefault();

	var entry;
	var currency;

	entry = $('#newEntry').val();
	entry = parseFloat(entry);

	currency = currencyFormat(entry);

	$('#entries').append('<tr><td></td><td>'+currency+'</td></tr>');

	total += entry;

	$('#total').html(currencyFormat(total));
	$('#newEntry').val('');

}

function currencyFormat(number) {

	var convertedCurrency = parseFloat(number);
	convertedCurrency = convertedCurrency.toFixed(2);

	convertedCurrency = '$' + convertedCurrency;

	return convertedCurrency;
}

