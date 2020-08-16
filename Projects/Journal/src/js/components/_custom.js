$(document).ready(function() {

  var wrapper = $('.js-parent');

  wrapper.each(function() {
    var that = $(this);
    var toggle = that.find('.js-toggle');
    var search = that.find('.js-search');
    var form = that.find('.js-form');

    toggle.on('click', function() {

      var parent = $(this).parents('.js-parent');
      var parentToggle = parent.find('.js-toggle');
      var parentForm = parent.find('.js-form');
      var open = 'is-open';

      if(!parent.hasClass(open)) {
        parent.addClass(open);
        parentToggle.addClass(open);
        parentForm.addClass(open);
      } else {
        parent.removeClass(open);
        parentToggle.removeClass(open);
        parentForm.removeClass(open);
      }

    });

    search.on('click', function() {

      var parent = $(this).parents('.js-parent');
      var parentToggle = parent.find('.js-toggle');
      var parentForm = parent.find('.js-form');
      var open = 'is-open';

      if(parent.hasClass(open)) {
        parent.removeClass(open);
        parentToggle.removeClass(open);
        parentForm.removeClass(open);
      }
    });


    $('body').mouseup(function(e) { // событие клика по веб-документу

      var parent = $(this).parents('.js-parent');
      var parentToggle = parent.find('.js-toggle');
      var parentForm = parent.find('.js-form');
      var open = 'is-open';
      if (!parentForm.is(e.target) // если клик был не по нашему блоку
            && parentForm.has(e.target).length === 0) { // и не по его дочерним элементам
        parent.removeClass(open);
        parentToggle.removeClass(open);
        parentForm.removeClass(open);
      }
    });
  }); 
});


//menu-btn

// $(document).ready(function() {
//   $('.js-toggle-menu').click(function() {
//     $('.js-toggle-menu, ').toggleClass('is-active');
//   });
// });

$(document).ready(function() {
  $('.js-toggle-menu').click(function() {
    $('.js-toggle-menu').toggleClass('is-active');
    $('.js-nav-list').slideToggle('slow');
  });
  $(window).resize(function() {
    if($(window).width() >= 1024) {
      $('.js-nav-list').removeAttr('style');
      $('.js-toggle-menu').removeClass('is-active');
    }
  });
});
