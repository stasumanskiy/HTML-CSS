import fancybox from '@fancyapps/fancybox';

const fancyboxWrap = $('.js-fancybox');

fancyboxWrap.fancybox({
  protect: true,
  keyboard: true,
  animationEffect: false,
  arrows: true,
  clickContent: false
});
