$(document).ready(function() {

  // Mobile menu
    
  var toggle = $('.js-toggle');
  var nav = $('.js-navigation');
  var active = 'is-active';

  toggle.click(function() {
    toggle.toggleClass(active);
    nav.slideToggle('slow');
  });
  $(window).resize(function() {
    if ($(window).width() >= 768) {
      nav.removeAttr('style');
      toggle.removeClass(active);
    }
  });

  // Scroll yakor

  $(function() {
    var link = $('a[href^="#"]');
    var html = $('html, body');

    link.on('click', function(e) {
      e.preventDefault();

      var sc = $(this).attr('href'),
        dn = $(sc).offset().top;
      html.animate({ scrollTop: dn }, 1000);

    });
  });

});  
