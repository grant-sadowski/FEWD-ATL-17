

$(document).ready(function(){
  
  	// alert('hello world!');

  	var listItemValue;
  	var listCount;

	$('#add-list-item-btn').click(addListItem);
	$('#clear-all-btn').click(clearList);
	$('#to-do-list').on('click', '.edit-list-item', editList);
	$('#to-do-list').on('click','.to-do-item',makeCompleted);
	$('#to-do-list').on('click', '.remove-list-item', removeItem);
	$('#clear-completed-btn').click(clearCompleted);


	function addListItem(event) {
		listItemValue = $('#list-item').val();

		$('#to-do-list').append('<li class="to-do-item"><span>'+listItemValue+'</span><a class="edit-list-item">Edit</a> <a class="remove-list-item">Remove</a> </li>');

		countList();

		$('#list-item').val('');
	}

	function clearList(event) {

		$('#to-do-list').empty();

		countList();

		$('#list-item').val('');
	}

	function editList(event) {
		listItemValue = $(this).siblings('span').text();

		console.log(listItemValue);

		$(this).parent().html('<input id="list-item-temp" type="text" value='+listItemValue+'>');

		$('#list-item-temp').keypress(function(event){
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if(keycode=='13') {
				listItemValue = $('#list-item-temp').val();
				console.log(listItemValue);
				$('#list-item-temp').parent().replaceWith('<li class="to-do-item"><span>'+listItemValue+'</span><a class="edit-list-item">Edit</a> <a class="remove-list-item">Remove</a> </li>');
			}
		})
	}

	function makeCompleted(event) {

		$(this).find('span').toggleClass('completed');
	}

	function removeItem(event) {
		
		$(this).parent().remove();

		countList();
	}

	function countList(event) {
		listCount = $('#to-do-list li').length;
		$('#count').empty();
		$('#count').append('<p id="count">You have '+listCount+' todos left.</p>');
	}

	function clearCompleted(event) {

		$('#to-do-list').each(function(event) {

			if ($(this).children().find('span').hasClass('completed') == true) {
				
				$(this).children().remove();
			}
		});

		countList();

	}




});