
$(document).ready(function(){
	// alert("ready!");

	var check = 0;


	$('#arrow').click(showMenu);


	function showMenu(event) {

		if (check == 0) {
			$('#main-nav').slideDown();
			$('#arrow').html('close');
			$('#arrow').css('color', 'yellow');
			check = 1;
		}
		else {
			$('#main-nav').slideUp();
			$('#arrow').html('menu');
			$('#arrow').css('color', 'white');
			check = 0;
		}

		// $('#main-nav').slideToggle();
		// $('#main-nav').css('display', 'block');
	}



});