import slick from 'slick-carousel';

const DOC = $(document);

DOC.ready(() => {

  const sliderWorks = $('.js-slider-workspace');

  sliderWorks.each((i, el) => {

    let that = $(el);
    let sliderFor = that.find('.js-slider-for');
    let sliderNav = that.find('.js-slider-nav');

    sliderFor.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      asNavFor: sliderNav
    });
    sliderNav.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: sliderFor,
      dots: false,
      arrows: false,
      focusOnSelect: true,
      vertical: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: false,
          }
        }
      ]
    });
  });
});
