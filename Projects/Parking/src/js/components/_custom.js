$(document).ready(function() {
  // function toggleMenu() {

  //   var toggle = $('.js-menu-toggle');
  //   var nav = $('.js-navigation');
  //   var active = 'is-active';
    
  //   toggle.click(function() {
      
  //     var that = $(this);

  //     nav.fadeIn('slow', function() {
  //       // that.removeAttr('style');
  //       that.toggleClass(active);
  //       // if (that.css('display') === 'none') {
  //       // }
  //     });
  //   });
  // }

  // toggleMenu();

  //popup

  var toggleWrapper = $('.js-parents');

  toggleWrapper.each(function() {

    var body = $('body');
    var that = $(this);
    var showToggle = that.find('.js-toggle-popup');
    var closeToggle = that.find('.js-close');
    var overlayToggle = that.find('.js-overlay');
    var toggle = $('.js-menu-toggle');

    toggle.on('click', function(e) {
      e.preventDefault();

      var parent = $(this).parents('.js-parent');
      var navBlock = parent.find('.js-navigation');
      var parentOverlay = parent.find('.js-overlay');
      var open = 'is-open';
      var hidden = 'is-hidden';
      if (!parent.hasClass(open)) {
        body.addClass(hidden);
        parent.addClass(open);
        parentOverlay.fadeIn();
        navBlock.fadeIn();
      }
    });

    showToggle.on('click', function(e) {
      e.preventDefault();

      var parent = $(this).parents('.js-parent');
      var contentBlock = parent.find('.js-popup-show');
      var parentOverlay = parent.find('.js-overlay');
      var open = 'is-open';
      var hidden = 'is-hidden';
      if (!parent.hasClass(open)) {
        body.addClass(hidden);
        parent.addClass(open);
        parentOverlay.fadeIn();
        contentBlock.fadeIn();
      }
    });

    closeToggle.on('click', function() {

      var parent = $(this).parents('.js-parent');
      var contentBlock = parent.find('.js-popup-show');
      var parentOverlay = parent.find('.js-overlay');
      var open = 'is-open';
      var hidden = 'is-hidden';
      if (parent.hasClass(open)) {
        body.removeClass(hidden);
        parent.removeClass(open);
        parentOverlay.fadeOut();
        contentBlock.fadeOut();
      }
    });

    overlayToggle.on('click', function() {

      var parent = $(this).parents('.js-parent');
      var contentBlock = parent.find('.js-popup-show');
      var navBlock = parent.find('.js-navigation');
      var parentOverlay = parent.find('.js-overlay');
      var open = 'is-open';
      var hidden = 'is-hidden';
      if (parent.hasClass(open)) {
        body.removeClass(hidden);
        parent.removeClass(open);
        parentOverlay.fadeOut();
        contentBlock.fadeOut();
        navBlock.fadeOut();
      }
    });
  });
});    
