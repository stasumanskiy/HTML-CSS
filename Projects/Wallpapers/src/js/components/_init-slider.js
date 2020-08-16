import slick from 'slick-carousel';

//slider header

var sliderWrap = $('.js-slider-wrap');

sliderWrap.each(function() {

  var that = $(this);
  var initSlider =  that.find('.js-init-slider');
  initSlider.slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  fade: true,
	  cssEase: 'linear',
	  prevArrow: '<div class="inner"><button type="button" class="slider__prev"></button></div>',
	  nextArrow: '<button type="button" class="slider__next"></button>'
  });
});
