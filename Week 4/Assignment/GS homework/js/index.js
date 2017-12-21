$(document).ready(function() {
	//alert("hello world");

	$('.readmore').click(showMoreText);
	$('.readless').click(showLessText);
	$('.learnmore').click(revealSomething);
	$('header a').hover(hoverEffect);

	function showMoreText() {
		event.preventDefault();
		$('.readmore').hide();
		$('#show-this-on-click').slideDown();
		$('.readless').show();
	}

	function showLessText() {
		event.preventDefault();
		$('.readmore').show();
		$('#show-this-on-click').slideUp();
		$('.readless').hide();		
	}

	function revealSomething() {
		event.preventDefault();
		$('#sidebar .learnmore').hide();
		$('#sidebar #learnmoretext').slideDown();
	}

	function hoverEffect() {
		$('header a').css('');
	}



})