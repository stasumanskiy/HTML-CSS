import validate from 'jquery-validation';

$(document).ready(function() {

  // validation
  function validationForm() {
    var container = $('.js-form');
    console.log(container);
    container.each(function() {
      var that = $(this);
      container.validate();
      var input = that.find('input, textarea');
      var button = that.find('.js-btn-submit');
      input.on('blur', function() {
        if (that.valid()) {
          button.prop('disabled', false);
        } else {
          button.prop('disabled', 'disabled');
        }
      });

    });
  }
  validationForm();
});

