//Popup

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
      parentOverlay.fadeIn(400);
      contentBlock.fadeIn(500);
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
      overlayToggle.fadeOut(400);
      contentBlock.fadeOut(500);
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
      overlayToggle.fadeOut(400);
      contentBlock.fadeOut(500);
    }
  });
});
