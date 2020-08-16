function openChat() {
	var popapChat = $('.js-popap-chat');
	var popapCalc = $('.js-popap-calc');
	var popapClose = $('.js-chat-close');

	popapClose.click(function() {
		popapChat.addClass('is-close');
		window.sessionStorage.setItem("openFeedback", "true");
	});

	$(window).on("scroll", function() {
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 0 && !popapChat.hasClass('is-open') ) {
			setTimeout(function(){ popapChat.addClass('is-open'); }, 5000);	
		}
	});
	var openFeedback = window.sessionStorage.getItem("openFeedback");
	if (openFeedback) {
		popapChat.addClass('is-close');
	}
}
openChat();

function dropDown() {
	$(document).ready(function() {
  $('.js-dropdown-trigger, .dropdown__link').click(function() {
    $('.js-dropdown-list').slideToggle(300);
    $('.dropdown__trigger .js-dropdown').toggleClass('active');
  });
});
}

dropDown();

function toggleSearch() {
$(document).ready(function() {
  $('.search-buttons__advanced-search, .advanced-form__search-btn').click(function() {
    $('.advanced-form').slideToggle(300);
    $('.js-form-group-button').toggleClass('active');
  });
});
}

toggleSearch();

function openPopaps() {
	var popupOpen = $('.js-popup-step-open');
	var popupMain = $('.js-popup-main');
	popupOpen.click(function() {
		popupMain.addClass('open');
		$('body').addClass('open');
	})
};
openPopaps();

function openPopap() {
	var popupOpen = $('.js-popap-calc');
	var popupMain = $('.js-popup-main');
	popupOpen.click(function() {
		popupMain.addClass('open');
		$('body').addClass('open');
	})
};
openPopap();



function closePopap() {
	var popupClose = $('.js-close-popup');
	var popupMain = $('.js-popup-main');
	popupClose.click(function() {
		popupMain.removeClass('open');
		$('body').removeClass('open');
	})
};
closePopap();


// function openStep() {
// 	$('.popup-step__item').on('click', $('.popup-step__item:not(.is-active)'), function() {
//  		$(this)
//   			.addClass('is-active').prevAll().removeClass('is-active').addClass('prev')
//    			.closest('div.popup-step__content-line').find('div.popup-step__content').removeClass('is-active').eq($(this).index()).addClass('is-active');
//  		});
// 		$('.popup-step__item').on('click', function() {
// 	 		$(this).nextAll().removeClass('is-active').removeClass('prev').closest('div.popup-step__content-line').find('div.popup-step__content').removeClass('is-active').eq($(this).index()).addClass('is-active');
// 		});
// };
// openStep();

function openStepp() {
	$('.js-btn').on('click', function() {
		var parent = $(this).parents('.js-parent-tabs');
		var aciveItem = parent.find('.js-item.is-active');
		var activeContent = parent.find('.js-popup-content.is-active')
		var aciveItemData = aciveItem.data();
		parent.removeClass('is-active');
		activeContent.removeClass('is-active').next().addClass('is-active');
		aciveItem.removeClass('is-active').next().addClass('is-active').prevAll().addClass('prev');
	});
};
openStepp();


function callBack() {
	$(document).ready(function() {
	$('.middle-header .single-widget .btn').click( function(event){
		event.preventDefault();
		$('.call-back__overlay').fadeIn(400,
		 	function(){
				$('.call-back') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('.call-back__close-btn, .call-back__overlay').click( function(){
		$('.call-back')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.call-back__overlay').fadeOut(400);
				}
			);
	});
});
}

callBack();

function checkBox() {
	$(document).ready(function () {
    $('.option__form-block label input[type=checkbox]').change(function(){
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });
});
}

checkBox();

function radioButton() {
	$(document).ready(function () {
    $('.activities__radio label input[type=radio]').change(function(){
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });
});
}

radioButton();

function slickSlider() {
 var $status = $('.current-gallery');
    var $slickElement = $('.slider-single');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });
if ($('.slider-single').length) {
	$('.slider-single').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  asNavFor: '.slider-nav',
	  autoplay: false,
	  adaptiveHeight: true,
	  prevArrow: '<button type="button" class="slider__prev"><i class="fas fa-angle-left"></i></button>',
	  nextArrow: '<button type="button" class="slider__next"><i class="fas fa-angle-right"></i></button>',
	});
}
if ($('.slider-nav').length) {
	$('.slider-nav').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  asNavFor: '.slider-single',
	  dots: false,
	  focusOnSelect: true,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			}
		}, {
			breakpoint: 640,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
		}
		}, {
			breakpoint: 420,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
		}
		}]

	});
}

}

slickSlider();

$(function() {
	if (($('.js-daterange').length)){
		$('.js-daterange').daterangepicker({
			autoApply: true,
			drops: 'up',
		  	locale: {
		       format: 'DD.MM.YYYY'
		    }
		});
	}
  
});



$(function() {
	var initFlug = false;
	$('#configPicker').calendarsPicker({
		 monthsToShow: 2,
		 showOtherMonths: true,
		 multiSelect: 2,
		 dateFormat: 'dd.mm.yyyy ',
		 pickerClass: 'custom-calendar',
		 showAnim: 'fadeIn',
		 changeMonth: false,
		 prevText: '<i class="fas fa-angle-left"></i>',
		 nextText: '<i class="fas fa-angle-right"></i>',
		 onShow: function(dates) {

			var html =  '<div class="datepicker-heder">' +
							'<span>Выбирите, когда Вам удобно выехать</span> ' +
							'<label class="checkbox">' +
								'<input class="checkbox__input js-daterange-checkbox" type="checkbox">' +
								'<span class="checkbox__custom"></span>' +
								'<span class="plus-minus">' +
									'<i class="fas fa-plus"></i>' +
									'<i class="fas fa-minus"></i>' +
								'</span>' +
								'3 дня (гибкие даты)' +
							'</label>' +
						'</div>';
			var container = $('body .custom-calendar');
			 	if (!initFlug) {
				initFlug = true;
				container.prepend(html);	
			} else {
			}
			initFlug = false;
		 },
		 onChangeMonthYear: function(year, month) {

			var html =  '<div class="datepicker-heder">' +
							'<span>Выбирите, когда Вам удобно выехать</span> ' +
							'<label class="checkbox">' +
								'<input class="checkbox__input js-daterange-checkbox" type="checkbox">' +
								'<span class="checkbox__custom"></span>' +
								'<span class="plus-minus">' +
									'<i class="fas fa-plus"></i>' +
									'<i class="fas fa-minus"></i>' +
								'</span>' +
								'3 дня (гибкие даты)' +
							'</label>' +
						'</div>';
			var container = $('body .custom-calendar');
			 	if (!initFlug) {
				initFlug = true;
				container.prepend(html);
			} else {
			}
			initFlug = false;	
    	},
    	onSelect: function(dates) {

			var html =  '<div class="datepicker-heder">' +
							'<span>Выбирите, когда Вам удобно выехать</span> ' +
							'<label class="checkbox">' +
								'<input class="checkbox__input js-daterange-checkbox" type="checkbox">' +
								'<span class="checkbox__custom"></span>' +
								'<span class="plus-minus">' +
									'<i class="fas fa-plus"></i>' +
									'<i class="fas fa-minus"></i>' +
								'</span>' +
								'3 дня (гибкие даты)' +
							'</label>' +
						'</div>';
			var container = $('body .custom-calendar');
			 	if (!initFlug) {
				initFlug = true;
				container.prepend(html);
			} else {
			}
			initFlug = false;
    	},
	});
		// if (!container.hasClass('some-class')) {
		// 	container.addClass('some-class');
			// container.prepend(html);	
		// } else {
		// 	// console.log(picker);
		// }
		// console.log(container);
});

$('body').on('change', '.js-daterange-checkbox', function(){
		$('.hide-span').toggleClass('active');
		$('#configPicker').calendarsPicker('hide');
});