// accordion EN

var accordionWrapEN = $('.js-parent-en');

accordionWrapEN.each(function() {
  var _this = $(this);
  var accorTrig = _this.find('.js-show-btn');
  var accordions = _this.find('.js-parents');
  var allContentBlocks = _this.find('.js-show-block');
  var closeBtn = _this.find('.js-close');
  var showListBtn = _this.find('.js-list-btn');

 
  accorTrig.on('click', function() {
    var parent = $(this).parents('.js-parents');
    var open = 'is-open';
    var contentBlock = parent.find('.js-show-block');
    var contentText = parent.find('.js-show-btn');
    if (!parent.hasClass(open)) {
      parent.addClass(open);
      contentBlock.slideDown(500);
      contentText.text('Back');
    } else {
      parent.removeClass(open);
      contentBlock.slideUp(500);
      contentText.text('See more');
    }   
  });

  closeBtn.on('click', function() {
    var parent = $(this).parents('.js-parents');
    var open = 'is-open';
    var contentBlock = parent.find('.js-show-block');
    var contentText = parent.find('.js-show-btn');
    if (!parent.hasClass(open)) {
      contentText.text('See more');
      accordions.removeClass(open);
      allContentBlocks.slideUp(500);
    } else {
      parent.removeClass(open);
      contentText.text('See more');
      contentBlock.slideUp(500);
    }   
  });

  showListBtn.on('click', function() {
    var parent = $(this).parents('.js-slide-parents');
    var open = 'is-open';
    var contentBlock = parent.find('.js-parents');
    var contentText = parent.find('.js-list-btn');
    if (!parent.hasClass(open)) {
      contentText.text('Back');
      parent.addClass(open);
      contentBlock.slideDown(500);
    } else {
      parent.removeClass(open);
      contentText.text('See list');
      contentBlock.slideUp(500);
    }   
  });
});

// accordion UK

var accordionWrapUK = $('.js-parent-uk');

accordionWrapUK.each(function() {
  var _this = $(this);
  var accorTrig = _this.find('.js-show-btn');
  var accordions = _this.find('.js-parents');
  var allContentBlocks = _this.find('.js-show-block');
  var closeBtn = _this.find('.js-close');
  var showListBtn = _this.find('.js-list-btn');

 
  accorTrig.on('click', function() {
    var parent = $(this).parents('.js-parents');
    var open = 'is-open';
    var contentBlock = parent.find('.js-show-block');
    var contentText = parent.find('.js-show-btn');
    if (!parent.hasClass(open)) {
      parent.addClass(open);
      contentBlock.slideDown(500);
      contentText.text('Назад');
    } else {
      parent.removeClass(open);
      contentBlock.slideUp(500);
      contentText.text('Дивитись більше');
    }   
  });

  closeBtn.on('click', function() {
    var parent = $(this).parents('.js-parents');
    var open = 'is-open';
    var contentBlock = parent.find('.js-show-block');
    var contentText = parent.find('.js-show-btn');
    if (!parent.hasClass(open)) {
      contentText.text('Дивитись більше');
      accordions.removeClass(open);
      allContentBlocks.slideUp(500);
    } else {
      parent.removeClass(open);
      contentText.text('Дивитись більше');
      contentBlock.slideUp(500);
    }   
  });

  showListBtn.on('click', function() {
    var parent = $(this).parents('.js-slide-parents');
    var open = 'is-open';
    var contentBlock = parent.find('.js-parents');
    var contentText = parent.find('.js-list-btn');
    if (!parent.hasClass(open)) {
      contentText.text('Назад');
      parent.addClass(open);
      contentBlock.slideDown(500);
    } else {
      parent.removeClass(open);
      contentText.text('До списку');
      contentBlock.slideUp(500);
    }   
  });
});

// accordion RU

var accordionWrapRU = $('.js-parent-ru');

accordionWrapRU.each(function() {
  var _this = $(this);
  var accorTrig = _this.find('.js-show-btn');
  var accordions = _this.find('.js-parents');
  var allContentBlocks = _this.find('.js-show-block');
  var closeBtn = _this.find('.js-close');
  var showListBtn = _this.find('.js-list-btn');

 
  accorTrig.on('click', function() {
    var parent = $(this).parents('.js-parents');
    var open = 'is-open';
    var contentBlock = parent.find('.js-show-block');
    var contentText = parent.find('.js-show-btn');
    if (!parent.hasClass(open)) {
      parent.addClass(open);
      contentBlock.slideDown(500);
      contentText.text('Назад');
    } else {
      parent.removeClass(open);
      contentBlock.slideUp(500);
      contentText.text('Смотреть больше');
    }   
  });

  closeBtn.on('click', function() {
    var parent = $(this).parents('.js-parents');
    var open = 'is-open';
    var contentBlock = parent.find('.js-show-block');
    var contentText = parent.find('.js-show-btn');
    if (!parent.hasClass(open)) {
      contentText.text('Смотреть больше');
      accordions.removeClass(open);
      allContentBlocks.slideUp(500);
    } else {
      parent.removeClass(open);
      contentText.text('Смотреть больше');
      contentBlock.slideUp(500);
    }   
  });

  showListBtn.on('click', function() {
    var parent = $(this).parents('.js-slide-parents');
    var open = 'is-open';
    var contentBlock = parent.find('.js-parents');
    var contentText = parent.find('.js-list-btn');
    if (!parent.hasClass(open)) {
      contentText.text('Назад');
      parent.addClass(open);
      contentBlock.slideDown(500);
    } else {
      parent.removeClass(open);
      contentText.text('К списку');
      contentBlock.slideUp(500);
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
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});


//toggle

$(document).ready(function() {
  $('.js-toggle').click(function() {
    $('.js-toggle').toggleClass('is-active');
    $('.js-hide-block').slideToggle('slow');
  });
  $(window).resize(function() {
    if($(window).width() >= 767) {
      $('.js-hide-block').removeAttr('style');
    }
  });

});

// $(document).ready(function() {
//   $('.header__menu-btn, .header-mobile__menu-button-close').click(function() {
//     $('.header-mobile').slideToggle('slow');
//   });
// });

//show-hide menu

// var toggleWrapper = $('.js-parent');

// toggleWrapper.each(function() {

//   var that = $(this);
//   var toggle = that.find('.js-toggle');
//   var parentsWrap = that.find('.js-parents');
  
//   toggle.on('click', function() {

//     var parent = $(this).parents('.js-parents');
//     var hideBlock = parent.find('.js-hide-block');
//     var open = 'is-open';
//     if (!parent.hasClass(open)) {
//       parent.addClass(open);
//       hideBlock.slideDown(500);
//     } else {
//       parent.removeClass(open);
//       hideBlock.slideUp(500);
//     }
//   });
// });
