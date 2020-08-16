import $ from 'jquery';

$(document).ready(function() {

  //Show search input

  var $searchToggle = $('.js-searchToggle');
  var $overlayToggle = $('.js-overlay');
  var classOpen = 'is-open';

  var addRemoveClass = (function(toggleName) {
    toggleName.on('click', function() {
      var $that = $(this);
      var $thatParent = $that.parents('.js-parent');
      var $blockShow = $thatParent.find('.js-formShow');
      var $blockOverlay = $thatParent.find('.js-overlay');
      var $configurationBlock = $thatParent.find('.js-configurationBlock');

      if (!$thatParent.hasClass(classOpen)) {
        $thatParent.addClass(classOpen);
        $blockShow.addClass(classOpen);
        $blockOverlay.fadeIn(100);
      } else {
        $thatParent.removeClass(classOpen);
        $blockShow.removeClass(classOpen);
        $blockOverlay.fadeOut(100);
        $configurationBlock.slideUp(100);
      }
    });
  });

  addRemoveClass($searchToggle);
  addRemoveClass($overlayToggle);

  //Show dropdown in search input focus

  var $checkedInput = $('.js-checkedInput');

  $checkedInput.on('focus', function() {
    var $that = $(this);
    var $thatParent = $that.parents('.js-parent');
    var $configurationBlock = $thatParent.find('.js-configurationBlock');

    if ($thatParent.hasClass(classOpen)) {
      $configurationBlock.slideDown(100);
    }
  });
});
