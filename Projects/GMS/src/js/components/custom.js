//Mobile menu

$(document).ready(function() {
  $('.js-toggle').click(function() {
    $('.js-toggle').toggleClass('is-active');
  });
});

//Ease scroll yachor

// $(document).ready(function() {
//   $('a[href^="#"]').click(function() {
//     var el = $(this).attr('href');
//     $('body').animate({
//       scrollTop: $(el).offset().top}, 2000);
//     return false;
//   });
// });


// Scroll top

$(document).ready(function() {
  $('body').append('<a href="#" class="go-top" title="Вверх">Вверх</a>');
});

$(function() {
  $.fn.scrollToTop = function() {
    $(this).hide().removeAttr('href');
    if ($(window).scrollTop() >= '250') $(this).fadeIn('slow');
    var scrollDiv = $(this);
    $(window).scroll(function() {
      if ($(window).scrollTop() <= '250') $(scrollDiv).fadeOut('slow');
      else $(scrollDiv).fadeIn('slow');
    });
    $(this).click(function() {
      $('html, body').animate({scrollTop: 0}, 'slow');
    });
  };
});

$(function() {
  $('.go-top').scrollToTop();
});
