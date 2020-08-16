// active link

(function($) {
  var tab = $('.js-active');

  tab.on('click', function() {
    $(this).addClass('is-active').siblings().removeClass('is-active');
  });
})(jQuery);

// toggle mobile menu

$(document).ready(function() {
  $('.js-toggle').click(function() {
    $('.js-toggle').toggleClass('is-active');
    $('.js-hide-block').slideToggle('slow');
  });
  $(window).resize(function() {
    if($(window).width() >= 1024) {
      $('.js-hide-block').removeAttr('style');
      $('.js-toggle').removeClass('is-active');
    }
  });
});
