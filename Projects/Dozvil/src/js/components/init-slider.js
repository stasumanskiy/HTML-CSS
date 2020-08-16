import slick from 'slick-carousel';

const DOC = $(document);

DOC.ready((el) => {

  const sliderRecommend = $('.js-slider-recommend');

  sliderRecommend.each((i, el) => {

    let that = $(el);
    let slider = that.find('.js-init-slider');

    slider.slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      // adaptiveHeight: true,
      // prevArrow: '<button type="button" class="slider-recm__prev-btn"></button>',
      // nextArrow: '<button type="button" class="slider-recm__next-btn"></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
          }
        }
      ]
    });
  });


  const sliderAdvantages = $('.js-slider-advantages');

  sliderAdvantages.each((i, el) => {

    let that = $(el);
    let slider = that.find('.js-init-slider');

    slider.slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  const sliderWorks = $('.js-slider-works');

  sliderWorks.each((i, el) => {

    let that = $(el);
    let slider = that.find('.js-init-slider');

    slider.slick({
      infinite: true,
      speed: 500,
      fade: true,
      dots: false,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: '<button type="button" class="slider__prev-btn"></button>',
      nextArrow: '<button type="button" class="slider__next-btn"></button>'
    });
  });

});

let timeOut;

$(window).on('resize', () => {
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    initSlider();
  }, 100);
});






