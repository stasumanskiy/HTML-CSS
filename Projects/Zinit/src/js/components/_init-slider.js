import slick from 'slick-carousel';

const DOC = $(document);

DOC.ready(() => {

  const sliderWorks = $('.js-slider-workspace');

  sliderWorks.each((i, el) => {

    let that = $(el);
    let slider = that.find('.js-init-slider');

    slider.slick({
      infinite: true,
      speed: 500,
      fade: true,
      dots: true,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slider__prev-btn"></button>',
      nextArrow: '<button type="button" class="slider__next-btn"></button>'
    });
  });
});  
