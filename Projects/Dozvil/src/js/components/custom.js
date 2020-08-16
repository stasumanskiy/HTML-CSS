//show-hide menu

$(document).ready(function() {

  var toggle = $('.js-toggle');
  var hideBlock = $('.js-hide-block');

  toggle.click(function() {
    toggle.toggleClass('is-active');
    hideBlock.slideToggle('slow');
  });

  $(window).resize(function() {
    if($(window).width() >= 1024) {
      hideBlock.removeAttr('style');
      toggle.removeClass('is-active');
    }
  });
});


//Header position

// const BODY = $('body');
// function stickyHeader() {

//   var nav = $('.js-navigation');
//   // set_nav = nav.offset().top;
//   var fixed = 'is-fixed';

//   $(window).on('scroll', function() {
//     var scroll_top = $(this).scrollTop();

//     if (scroll_top >= 500) {
//     	nav.addClass(fixed);
//     }
//     else {
//     	nav.removeClass(fixed);
//     }
//   });
// }
// stickyHeader();


var toggleWrapper = $('.js-parents');

toggleWrapper.each(function() {

  var body = $('body');
  var that = $(this);
  var showToggle = that.find('.js-toggle-popup');
  var showPopup = that.find('.js-popup-show');
  var closeToggle = that.find('.js-close');
  var overlayToggle = that.find('.js-overlay');
  var topBtn = $('.js-go-top');
  
  showToggle.on('click', function() {


    var parent = $(this).parents('.js-parent');
    var contentBlock = parent.find('.js-popup-show');
    var parentOverlay = parent.find('.js-overlay');
    var open = 'is-open';
    var hidden = 'is-hidden';
    if (!parent.hasClass(open)) {
    	body.addClass(hidden);
      	parent.addClass(open);
      	topBtn.addClass(hidden);
      	parentOverlay.fadeIn(400);
      	contentBlock.fadeIn(500);
    }
  });

  closeToggle.on('click', function() {
  // var topBtn = $('.js-go-top');

    var parent = $(this).parents('.js-parent');
    var contentBlock = parent.find('.js-popup-show');
    var open = 'is-open';
    var hidden = 'is-hidden';
    if (parent.hasClass(open)) {
    	body.removeClass(hidden);
      	parent.removeClass(open);
      	topBtn.removeClass(hidden);
      	overlayToggle.fadeOut(400);
      	contentBlock.fadeOut(500);
    }
  });

  overlayToggle.on('click', function() {
  // var topBtn = $('.js-go-top');

    var parent = $(this).parents('.js-parent');
    var contentBlock = parent.find('.js-popup-show');
    var open = 'is-open';
    var hidden = 'is-hidden';
    if (parent.hasClass(open)) {
    	body.removeClass(hidden);
      	parent.removeClass(open);
      	topBtn.removeClass(hidden);
      	overlayToggle.fadeOut(400);
      	contentBlock.fadeOut(500);
    }
  });
});


// Scroll top

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
  $('.js-go-top').scrollToTop();
});


// Scroll yakor

$(function() {
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr('href'),
      dn = $(sc).offset().top;
    $('html, body').delay(200).animate({scrollTop: dn}, 1000);
  });
});

//active-link

(function($) {
  var tab = $('.js-active-link');

  tab.on('click', function() {
    $(this).addClass('is-active').siblings().removeClass('is-active');
  });
})(jQuery);
