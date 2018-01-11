$(document).ready(function (){

	var lights = "on";
	
	$('#light_switch').click(switchLights);

	function switchLights () {
		
		if (lights == 'on') {
			$('body').addClass('dark');
			lights = 'off';	
		}
		else {
			$('body').removeClass('dark');
			lights = 'on';
		}

	}




});