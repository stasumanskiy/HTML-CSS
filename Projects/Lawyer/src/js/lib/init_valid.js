import validate from 'jquery-validation';

function validationForm() {
  var container = $('.js-form');
  container.each(function() {
    var form = $(this);
    form.validate();	
    var input = form.find('input, textarea');
    var button = form.find('.js-btn-submit');
    input.on('change', function() {
	  if (form.valid()) {
	    button.prop('disabled', false);
	  } else {
	    button.prop('disabled', 'disabled');
	  }
    });

  });
}

validationForm();
