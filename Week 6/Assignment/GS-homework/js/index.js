$(document).ready(function() {
  

  // Initiate array to hold all the city options
  var cityOptions = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
  var city;    // Initiate variable to record user input

  // Use a for loop to iterate through the array and add each as an option for the select menu

  // OLD METHOD BEFORE CLASS (LESSON 14)
  // for (i in cityOptions) {
  //   $('#city-type').append('<option>'+cityOptions[i]+'</option>');
  //   // Append method adds city within the select tag as an <option>
  // }

  $.each(cityOptions, function(index, value) {
    console.log(value);
    $('#city-type').append('<option>'+value+'</option>');
  })
  
  
  $('#city-type').change(updateCityBackground);  // Wait for user input via change in the select bar
  
  
  function updateCityBackground(){
    event.preventDefault();  // Prevent default behavior


    city = $('#city-type').val();    // Record the user selected city in variable 'ciy'

    
    if (city == 'NYC') {  // Compare against NYC city name
      $('body').attr('class', 'nyc');  // Use attr method to apply a class with the correct background to body
    }
    else if (city == 'SF') {  // Compare against SF city name
      $('body').attr('class', 'sf');
    }
    else if (city == 'LA') {  // Compare against LA city name
      $('body').attr('class', 'la');
    }
    else if (city == 'ATX') {  // Compare against ATX city name
      $('body').attr('class', 'austin');
    }
    else if (city == 'SYD') {  // Compare against SYD city name
      $('body').attr('class', 'sydney');
    }
    
    $('#city-type').val(city);   // Keep the name of the shown city in the select box
  }
  
  
});