$(document).ready(function() {
  
  // Compare this string against the known cities
  // Change the page background based on the user input
  
  
  // Initiate variables for city input and length
  var city;
  var length;
  
  $('#submit-btn').click(updateCityBackground);  // Wait for user input via button click
  
  
  function updateCityBackground(){
    event.preventDefault();
    // alert('you clicked me!');
    city = $('#city-type').val();    // On click, get the user input value as a string
    
    
    // Calculate string length
    length = city.length;
    
    // if (city.charAt(0) == ' ') {    // Check if last character is a space
    //   city = city.substring(1, length);
    // }
    // else if (city.charAt(length) == ' ') {
    //   city
    // }
    
    // console.log(city);
    
    if (city == 'NYC' || city == 'New York City' || city == 'New York') {  // Compare against NYC names; if true, change background
      $('body').css('background-image','url(images/nyc.jpg)');
    }
    else if (city == 'Bay Area' || city == 'San Francisco' || city == 'SF') {  // Compare against SF names
      $('body').css('background-image','url(images/sf.jpg)');
    }
    else if (city == 'LAX' || city == 'Los Angeles' || city == 'LA') {  // Compare
      $('body').css('background-image','url(images/la.jpg)');
    }
    else if (city == 'ATX' || city == 'Austin') {  // Compare
      $('body').css('background-image','url(images/austin.jpg)');
    }
    else if (city == 'SYD' || city == 'Sydney') {  // Compare
      $('body').css('background-image','url(images/sydney.jpg)');
    }
    
    else {  // If name doesn't match pre-defined cities, notify the user
      alert("Sorry - CitiPix doesn't support that city yet!");
    }
    
    
    
    $('#city-type').val('');   // Clear the input box after user submits city name
  }
  
  
});