import 'jquery-circle-progress/dist/circle-progress.js';

// init preloader

$(document).ready(function() {
  $('body').addClass('is-hidden').delay(2800).queue(function() 
  { 
    $(this).removeClass('is-hidden'); 
    $(this).dequeue();
  });
}, 2800);

$(document).ready(function() {
  $('#circle').circleProgress({
    value: 1,
    size: 270,
    thickness: 4,
    animation: { duration: 2500 },
    fill: {
      gradient: ['#FF1898']
    }
  });
});


$(window).on('load', function() {
  var $preloader = $('#preloader');
  $preloader.delay(2500).fadeOut('slow');
});


//reply comment

$('.js-reply-btn').click(function(event) {
  event.preventDefault();
  var that = $(this);
  var parent = that.parents('.js-parent-block');
  var buttonReply = parent.find('.js-open');

  if(!buttonReply.hasClass('is-open')) {
    buttonReply.addClass('is-open');
  }
});


//cencel comment

$('.js-cencel-btn').click(function(event) {
  event.preventDefault();
  var that = $(this);
  var parent = that.parents('.js-parent-block');
  var buttonReply = parent.find('.js-open');

  if(buttonReply.hasClass('is-open')) {
    buttonReply.removeClass('is-open');
  }
});

//delete block

$('.js-delete-btn').click(function(event) {
  event.preventDefault();
  var that = $(this);
  var parent = that.parents('.js-parent-block');
  var buttonReply = parent.find('.js-parent-del');

  buttonReply.remove();
});

