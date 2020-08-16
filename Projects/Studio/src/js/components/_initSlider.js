import slick from 'slick-carousel';

$(document).ready(function() {
  function slickSlider() {
    var sliderWrap = $('.js-sliderWrap');
    var slider = $('.js-mainSlider');
    sliderWrap.each(function() {
      slider.slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        fade: true,
        pauseOnHover: false,
        puseOnFocus: false,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slider__prev-button"></button>',
        nextArrow: '<button type="button" class="slider__next-button"></button>',
      });
    });
  };

  slickSlider();

});
