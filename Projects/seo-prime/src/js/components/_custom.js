import $ from 'jquery';
import 'owl.carousel';
import 'svgxuse';
import Parallax from 'parallax-js';
import {TimelineMax} from 'gsap';
import ScrollMagic from 'scrollmagic';

$(document).ready(function() {

//Sidebar-menu

  let open = 'is-open';
  let active = 'is-active';
  let $window = $(window);

  function navMenu(className) {
    let btn = document.getElementsByClassName(className);
    let body = document.getElementById('body');
    let menuBlock = document.getElementById('menu');
    let overlay = document.getElementById('overlay');

    [].forEach.call(btn,function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        body.classList.toggle(open);
        menuBlock.classList.toggle(open);
        overlay.classList.toggle(open);
      });
    });
  }
  navMenu('toggleMenu');
  navMenu('overlay');
  navMenu('closed');

  // Submenu;
  function showSubmenu() {
    let $submenu = $('.js-submenu');
    let $submenuBtn = $('.js-submenuBtn');
    let $submenuParent = $('.js-submenuParent');


    $submenuBtn.on('click', function(e) {
      e.preventDefault();
      let $that = $(this);
      let $parent = $that.parents('.js-submenuParent');
      let $thisBlock = $parent.find('.js-submenu');
      if ($parent.hasClass(active)) {
        $parent.removeClass(active);
        $submenu.slideUp(300);
      } else {
        $submenuParent.removeClass(active);
        $submenu.slideUp(300);
        $parent.addClass(active);
        $thisBlock.slideDown(300);
      }
    });
  }
  showSubmenu();

  function sliderInit() {
    let $sliderInitClassName = $('.js-sliderInit');
    let $sliderInitClassNameModal = $('.js-sliderInitModal');

    if ($sliderInitClassName.length) {
      $sliderInitClassName.owlCarousel({
        loop: true,
        dots: true,
        slideBy: 1,
        margin: 27,
        center: true,
        responsive:{
          0:{
            center: true,
            items:1
          },
          768:{
            center: false,
            items:2
          },
          1024:{
            center: true,
            items:3
          }
        }
      });
    }
    if ($sliderInitClassNameModal.length) {
      $sliderInitClassNameModal.owlCarousel({
        loop: true,
        dots: true,
        slideBy: 1,
        margin: 20,
        responsive:{
          0:{
            center: true,
            items:1
          },
          600:{
            items:2
          },
          1024:{
            center: false,
            items:2
          }
        }
      });
    }
  }

  sliderInit();

  // Parallax

  function parallaxEffect() {
    let scene =  document.getElementById('scene');
    let quoteBig =  document.getElementById('quoteBig');
    let quoteSmall =  document.getElementById('quoteSmall');

    let parallaxScene = new Parallax(scene, {
      relativeInput: true
    });
    let parallaxQuoteBig = new Parallax(quoteBig, {
      relativeInput: true
    });
    let parallaxQuoteSmall = new Parallax(quoteSmall, {
      relativeInput: true
    });
  }

  parallaxEffect();

  // ParallaxScroll

  function parallaxScroll() {
    let parallax = -0.5;
    let $bgImages = $('#hero');
    let offsetTops = [];

    $bgImages.each(function(i, el) {
      offsetTops.push($(el).offset().top);
    });

    $window.scroll(function() {
      let dy = $(this).scrollTop();
      $bgImages.each(function(i, el) {
        let ot = offsetTops[i];
        $(el).css('background-position', '50% ' + (dy - ot) * parallax + 'px');
      });
    });
  };

  parallaxScroll();

  // GSAP

  let tl = new TimelineMax();
  let tll = new TimelineLite();

  function lineBox() {
    let animClass = $('.js-start-animation');
    animClass.each(function() {
      let thisSection = $(this);
      let container = thisSection.find('.js-box, .js-button');
      let counter = thisSection.find('.js-score');

      new ScrollMagic.Scene({
        triggerElement: this
      })
        .addTo(new ScrollMagic.Controller())
        .on('start', function() {
          if (!thisSection.hasClass('is-animate')) {
            thisSection.addClass('is-animate');
            container.addClass('is-show');
            let interval = 0;
            container.each(function() {
              let line = $(this).find('.js-line-box');
              new TimelineMax()
                .call(function() {
                  new TimelineMax()
                    .staggerTo(line, 0.5,
                      {
                        x: 0,
                        y: 0
                      }, 0.5);
                }, null,null,interval);
              interval += 0.3;
              // console.log(interval);
            });
          }
          if (!counter.hasClass('is-counter')) {
            counter.addClass('is-counter');
            counter.each(function() {
              add($(this));
            });
          }
        });
      // .addIndicators();
    });
  }
  lineBox();
  function add(scoreDisplay) {
    let dataStr = scoreDisplay.data('counter');
    let time = {score:0};
    TweenLite.to(time, 1, {score:dataStr, roundProps:'score', onUpdate:numberCounter, ease:Linear.easeNone});

    function numberCounter() {
      scoreDisplay.text(time.score);
    }
  }
});
