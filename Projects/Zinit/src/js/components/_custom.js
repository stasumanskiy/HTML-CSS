$(document).ready(() => {

// Mobile menu
  let toggle = $('.js-toggle');
  let hideBlock = $('.js-hide-block');

  toggle.on('click', () => {
    toggle.toggleClass('is-active');
    hideBlock.slideToggle('slow');
  });

  $(window).on('resize', () => {
    if ($(window).width() >= 1023) {
      hideBlock.removeAttr('style');
      toggle.removeClass('is-active');
    }
  });

  // Font-size custom
  let $toggleBnt = $('.js-active');
  let $firstToggleBnt = $('.font-size__btn--first');
  let $secondToggleBnt = $('.font-size__btn--second');
  let $thirdToggleBnt = $('.font-size__btn--third');
  
  $toggleBnt.on('click', function() {
    let that = $(this);
    
    that.addClass('is-active').siblings().removeClass('is-active');
  });
  
  let first = 'first';
  let second = 'second';
  let third = 'third';
  let body = $('body');

  $firstToggleBnt.on('click', () => {

    if (!body.hasClass(first)) {
      if (body.hasClass(second)) {
        body.removeClass(second);
      }

      if (body.hasClass(third)) {
        body.removeClass(third);
      }

    } else {
    }
  });
  
  $secondToggleBnt.on('click', () => {

    if (!body.hasClass(second)) {
      if (body.hasClass(first)) {
        body.removeClass(first);
      }

      if (body.hasClass(third)) {
        body.removeClass(third);
      }

      if (!body.hasClass(first)) {
        body.addClass(second);
      }

    } else {
      body.removeClass(second);
    }
  });
    
  $thirdToggleBnt.on('click', () => {
    
    if (!body.hasClass(third)) {
      if (body.hasClass(second)) {
        body.removeClass(second);
      }

      if (body.hasClass(first)) {
        body.removeClass(first);
      }

      if (!body.hasClass(first)) {
        body.addClass(third);
      }

    } else {
      body.removeClass(third);
    }
  });

  // Scroll top
  $(function() {

    $.fn.scrollToTop = function() {
      var $window = $(window);
      var $that = $(this);
      var $body = $('html, body');

      $that.hide().removeAttr('href');
      if ($window.scrollTop() >= '250') {
        $that.fadeIn('slow');
      }

      $window.scroll(function() {
        if ($window.scrollTop() <= '250') {
          $($that).fadeOut('slow');
        } else {
          $($that).fadeIn('slow');
        } 
      });

      $that.click(function() {
        $body.animate({ scrollTop: 0 }, 'slow');
      });
    };
  });

  $(function() {
    var $toggle = $('.js-go-top');
    $toggle.scrollToTop();
  });
});
