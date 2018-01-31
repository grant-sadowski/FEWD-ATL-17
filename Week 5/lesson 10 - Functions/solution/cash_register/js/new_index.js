// total will store the running total, starting at 0
var total = 0;

// When the user submits the form, run the `enter` function
$('#entry').submit(enter);

// `enter()` reads the user's input, and updates the receipt
function enter(event) {
  
	// Set up variables to use
	var entry;
	var currency;

	// Prevent form submission
	event.preventDefault();

	// Read the user input
	entry = $('#newEntry').val();

	// Convert to decimal
	entry = parseFloat(entry);

	// Convert to currency via currencyFormat function
	currency = currencyFormat(entry);

	// Add line item to table
	$('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');

	// Update the running total
	total = total + entry;
	console.log(total);

	// Print the updated total with proper currency formatting
	$('#total').html(currencyFormat(total));

	// Clear out the input field, ready for next value
	$('#newEntry').val('');
  
}

// Use this to convert a number to U.S. currency format
function currencyFormat(number) {
  
	// Convert the number to decimal
	var convertedCurrency = parseFloat(number);

	// Round to 2 decimal places
	convertedCurrency = convertedCurrency.toFixed(2);

	// Add the $ before the number
	convertedCurrency = '$' + convertedCurrency;

	// Send back the result
	return convertedCurrency;

  
}

/* Cash register pseudocode:

	Get new receipt item value and convert it to a decimal number

	Append to the receipt list

	Update the total to include the newest item value

*/