$('.js-btn').click(function() {
  $('.js-btn').addClass('btn-is-active');
  setTimeout(function() { $('.js-btn').removeClass('btn-is-active'); }, 250);
});


$('.js-btn1').click(function() {
  $('.js-btn1').addClass('is-press');
  setTimeout(function() { $('.js-btn1').removeClass('is-press'); }, 250);
});

$('.js-btn-send').click(function() {
  $('.js-btn-send').addClass('is-press');
  setTimeout(function() { $('.js-btn-send').removeClass('is-press'); }, 250);
});

$('.js-btn1').click(function() {
  $('.js-hide').addClass('hide');
  $('.js-hide-in').addClass('show');
});

$('.js-close').click(function() {
  $('.js-hide').removeClass('hide');
  $('.js-hide-in').removeClass('show');
});

import validate from 'jquery-validation'; 

$.validator.methods.email = function( value, element ) {
  return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
};

var container = $('.js-form');
container.each(function() {
  var form = $(this);
  form.validate();  
  var input = form.find('input');
  var button = form.find('.js-btn-send');
  input.on('blur', function() {
    if (form.valid()) {
      button.prop('disabled', false);
    } else {
      button.prop('disabled', 'disabled');
    }
  });

});
