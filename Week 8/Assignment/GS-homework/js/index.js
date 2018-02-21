$(document).ready(function(){
  
  $('#submit-btn').click(checkForm);
  
  function checkForm() {
    
    event.preventDefault();
    
    if ($('#form-name').val()==='' || $('#form-email').val()==='' || $('#form-number').val()==='' || $('#form-state').val()==='' || $('#form-password').val()==='' || $('#form-radio').val()==='' || $('#form-checkbox').val()==='') {
      
      $('#error').html('<p>Please complete all fields</p>');
    }
    else {
      
    }
    
  }
  
  
});