import $ from 'jquery';

//show-hide menu

$(document).ready(function() {

  var toggleWrapper = $('.js-parent');

  toggleWrapper.each(function() {

    var $body = $('body');
    var active = 'is-active';
    var hidden = 'is-hidden';
    var style = 'style';
    var open = 'is-open';
    var that = $(this);
    var toggle = that.find('.js-toggle');
    var $parent = that.find('.js-parents');
    var $hideBlock = that.find('.js-hide-block');

    $(window).resize(function() {
      if ($(window).width() >= 1024) {
        $parent.removeClass(open);
        $hideBlock.removeAttr(style);
        toggle.removeClass(active);
        $body.removeClass(hidden);
      }
    });
    
    toggle.on('click', function() {

      var $parent = $(this).parents('.js-parents');
      var hideBlock = $parent.find('.js-hide-block');

      if (!$parent.hasClass(open)) {
        $parent.addClass(open);
        hideBlock.slideDown(500);
        toggle.addClass(active);
        $body.addClass(hidden);
      } else {
        $parent.removeClass(open);
        hideBlock.slideUp(500);
        toggle.removeClass(active);
        $body.removeClass(hidden);
      }
    });
  });
});
