import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';

$(document).ready(function() {
  function lineBox() {
    var animClass = $('.js-start-animation');
    animClass.each(function() {
      var thisSection = $(this);
      var container = thisSection.find('.js-box, .js-button');
      var counter = thisSection.find('.js-score');

      new ScrollMagic.Scene({
        triggerElement: this
      })
        .addTo(new ScrollMagic.Controller())
        .on('start', function() {
          if (!thisSection.hasClass('is-animate')) {
            thisSection.addClass('is-animate');
            container.addClass('is-show');
            var interval = 0;
            container.each(function() {
              var line = $(this).find('.js-line-box');
              new TimelineMax()
                .call(function() {
                  new TimelineMax()
                    .staggerTo(line, 0.5,
                      {
                        x: 0,
                        y: 0
                      }, 0.5);
                }, null, null, interval);
              interval += 0.7;
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
    var dataStr = scoreDisplay.data('counter');
    var time = { score: 0 };
    TweenLite.to(time, 1, { score: dataStr, roundProps: 'score', onUpdate: numberCounter, ease: Linear.easeNone });
      
    function numberCounter() {
      scoreDisplay.text(time.score);
    }
  }
});
    
