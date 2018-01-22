
  function fnbrash(e) {

    var modal = document.getElementById('modalBrash');
    var span = document.getElementsByClassName('close')[0];

    modal.style.display = 'block';

    span.onclick = function() {
    	modal.style.display = 'none';
    }

	window.onclick = function() {
		if(event.target == modal) {
	  	modal.style.display = 'none';
		}
	}

  }
  