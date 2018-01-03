$(document).ready(function() {
	//alert("hello world");

	$('.readmore-1').click(showMoreText);
	$('.readmore-2').click(showMoreText2);
	$('.readless-1').click(showLessText);
	$('.readless-2').click(showLessText2);
	$('.learnmore').click(revealSomething);
	$('#bottom-cta a').click(dialogBox);
	

	function showMoreText() {
		event.preventDefault();
		$('.readmore-1').hide();
		$('#show-this-on-click').slideDown();
		$('.readless-1').show();
	}
	
	function showMoreText2() {
	  event.preventDefault();
	  $('.readmore-2').hide();
	  $('#show-this-on-click-2').slideDown();
	  $('.readless-2').show();
	}

	function showLessText() {
		event.preventDefault();
		$('.readmore-1').show();
		$('#show-this-on-click').slideUp();
		$('.readless-1').hide();
	}
	
	function showLessText2 () {
	  event.preventDefault();
	  $('.readmore-2').show();
	  $('#show-this-on-click-2').slideUp();
	  $('.readless-2').hide();
	}

	function revealSomething() {
		event.preventDefault();
		$('#sidebar .learnmore').hide();
		$('#sidebar #learnmoretext').slideDown();
	}

	function dialogBox() {
		//alert('Hello!!!');
	  event.preventDefault();
	  
	  $('#dialog').dialog({
	    autoOpen: false,
	    resizable: false,
	    draggable: false,
	    width: 500,
	    show: 'slideDown'
	    
	  });
	  
		$('#dialog').dialog('open');
	}



})