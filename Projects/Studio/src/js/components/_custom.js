import validate from 'jquery-validation';

$(document).ready(function() {
  function toggleMenu() {
    $('.header__mob-menu-toggle').click(function() {
      $('.js-navigation').slideToggle('slow', function() {
        if ($(this).css('display') === 'none') {
          $(this).removeAttr('style');
        }
      });
      $('.header__mob-menu-toggle').toggleClass('active');
      $('body').toggleClass('active');
    });
  }

  toggleMenu();

  //popup
  
  var toggleWrapper = $('.js-parents');
  
  toggleWrapper.each(function() {
  
    var body = $('body');
    var that = $(this);
    var showToggle = that.find('.js-toggle-popup');
    var closeToggle = that.find('.js-close');
    var overlayToggle = that.find('.js-overlay');
  
    showToggle.on('click', function() {
  
  
      var parent = $(this).parents('.js-parent');
      var contentBlock = parent.find('.js-popup-show');
      var parentOverlay = parent.find('.js-overlay');
      var open = 'is-open';
      var hidden = 'is-hidden';
      if (!parent.hasClass(open)) {
        body.addClass(hidden);
        parent.addClass(open);
        parentOverlay.slideDown(400);
        contentBlock.slideDown(500);
      }
    });
  
    closeToggle.on('click', function() {
  
      var parent = $(this).parents('.js-parent');
      var contentBlock = parent.find('.js-popup-show');
      var open = 'is-open';
      var hidden = 'is-hidden';
      if (parent.hasClass(open)) {
        body.removeClass(hidden);
        parent.removeClass(open);
        overlayToggle.slideUp(400);
        contentBlock.slideUp(500);
      }
    });
  
    overlayToggle.on('click', function() {
  
      var parent = $(this).parents('.js-parent');
      var contentBlock = parent.find('.js-popup-show');
      var open = 'is-open';
      var hidden = 'is-hidden';
      if (parent.hasClass(open)) {
        body.removeClass(hidden);
        parent.removeClass(open);
        overlayToggle.slideUp(400);
        contentBlock.slideUp(500);
      }
    });
  });


  // validation
  // function validationForm() {
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
  // }
  // validationForm();
});

