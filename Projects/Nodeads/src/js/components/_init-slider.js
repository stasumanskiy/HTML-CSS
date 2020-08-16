import slick from 'slick-carousel';

$(document).ready(function() {
  function slickSlider() {
    var sliderWrap = $('.js-sliderWrap');
    var slider = $('.js-mainSlider');
    sliderWrap.each(function() {
      slider.slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slider__prev-button"></button>',
        nextArrow: '<button type="button" class="slider__next-button"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false

            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });
    });
  };

  slickSlider();

});

$(document).ready(() => {
  let timeOut;
  let arrayHref = [];
  const sliderIcons = $('.slick-slider .icon use');
  sliderIcons.each((i, el) => {
    const atr = $(el).attr('xlink:href');
    arrayHref.push(atr);
  });
  $(window).on('resize', () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      for (let i = 0; i <= sliderIcons.length - 1; i++) {
        $(sliderIcons[i]).attr('xlink:href', `${arrayHref[i]}`);
      }
    }, 100);
  });
});
