import $ from 'jquery';
import 'slick-carousel';

$('.js-slider').slick({
  dots: true,
  fade: true,
  autoplay: true,
  speed: 700,
  cssEase: 'linear',
  infinite: true,
  arrows: false,
  dotsClass: 'dots-custom',
  adaptiveHeight: true
});
