import {TimelineMax} from 'gsap';
import ScrollMagic from 'scrollmagic';

var tl;
tl = new TimelineMax({
});

var logo = document.getElementById('logo'),
  	first = document.getElementById('first'),
  	second =  document.getElementById('second'),
  	third = document.getElementById('third'),
  	tll = new TimelineLite();

tll.to(logo, 1, {y:190,opacity: 1})
  	.to(first, 1, {x:'-= 2000',opacity: 1}, '-=.5')
  	.to(second, 1, {y:'-= 240',opacity: 1}, '-=.5')
  	.to(third, 0.7, {y:'-= 220',opacity: 1}, '-=.5');

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
  var dataStr = scoreDisplay.data('counter');
  var time = {score:0};
  TweenLite.to(time, 1, {score:dataStr, roundProps:'score', onUpdate:numberCounter, ease:Linear.easeNone});

  function numberCounter() { 
    scoreDisplay.text(time.score);
  }
}
