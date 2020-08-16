$(document).ready(function() {
function slickSlider() {
	$('.mainSlider').slick({
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
		prevArrow: '<button type="button" class="slider__prev-button"><i class="fas fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slider__next-button"><i class="fas fa-angle-right"></i></button>',
	});
};

slickSlider();

function toggleMenu() {
	$('.header__mob-menu-toggle').click(function() {
		$('.js-navigation').slideToggle('slow',function() {
			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
		$('.header__mob-menu-toggle').toggleClass('active');
		$('body').toggleClass('active');
	})
}

toggleMenu();

function toggleGallery() {
	$('.js-gallery-button, .js-close-btn').click(function() {
		$('.gallery').slideToggle()
	});
}

toggleGallery();

function pausePlay() {
$('.js-gallery-button').on('click', function() {
	$('.mainSlider').slick('slickPause')
});

$('.js-close-btn').on('click', function() {
    $('.mainSlider').slick('slickPlay')
});
}

pausePlay();

function validationForm(){
var container = $('.js-form');
container.each(function() {
  var form = $(this);
  form.validate();	
  var input = form.find('input, textarea');
  var button = form.find('.js-btn-submit');
  input.on('blur', function() {
	  if (form.valid()) {
	    button.prop('disabled', false);
	  } else {
	    button.prop('disabled', 'disabled');
	  }
  });

});
}

validationForm();

function fancyBox() {
$(['data-fancybox']).fancybox({
	toolbar  : true,
	autoStart : true
});
}

fancyBox();
});