var total = 0;

$('#entry').submit(function(event) {
  
	var entry;
	var currency;

	event.preventDefault();

	entry = $('#newEntry').val();
	entry = parseFloat(entry);

	// console.log(currency(entry));

	currency = function(number){
		var convertedCurrency = parseFloat(number);
		convertedCurrency = convertedCurrency.toFixed(2);
		convertedCurrency = '$' + convertedCurrency;

		return convertedCurrency;
	};

	// console.log(currency(entry));

	$('#entries').append('<tr><td></td><td>' + currency(entry) + '</td></tr>');

	total = total + entry;

	$('#total').html(currency(total));
	$('#newEntry').val('');
  
});

/* Cash register pseudocode:

	Get new receipt item value and convert it to a decimal number

	Append to the receipt list

	Update the total to include the newest item value

*/