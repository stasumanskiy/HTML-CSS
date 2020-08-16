// Counter

// var numberStep = (now, tween) => {
// 	var $target = $(tween.elem);

// 	var rounded_now = Math.round(now);

// 	$target.prop('number', rounded_now).text(rounded_now);
// };
// var parent = $('.js-parent');
// var sum = 0;
//     parent.on('change', function() {
//     var checkboxes = document.getElementsByClassName('js-checked');
//     var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать
//     console.log(checkboxesChecked);
//     for (var index = 0; index < checkboxes.length; index++) {
//         if (checkboxes[index].checked) {
//             checkboxesChecked.push(10); // положим в массив выбранный
//         }
//     }
//         var sum = 0;
//         for (var i = 0; i < checkboxesChecked.length; i++) {
//             sum = sum + parseInt(checkboxesChecked[i]);

//         }
//         console.log(sum);
//     return checkboxesChecked; // для использования в нужном месте
//     return sum; // для использования в нужном месте
//     })


// var $use_max_power = $('.js-checked');

// $use_max_power.click(function(sum) {

//     var $arrow = $('.js-arrow');
//     // var sum = 100;
// 	if ($use_max_power.is(':checked')) {
// 		$('.js-counter').stop().animateNumber({
// 			number: sum,
// 			numberStep,
// 		}, 1000);

// 		rotate(10);

// 		function rotate(degree) {
// 			$arrow.css({'transform': `rotate(${  degree  }deg)`});
// 		}
// 	}
// 	else {
// 		$('.js-counter').stop().animateNumber({
// 			number: sum,
// 			numberStep,
//         }, 1000);
//         rotate(0);

//         function rotate(degree) {
//             $arrow.css({ 'transform': `rotate(${degree}deg)` });
//         }
// 	}
// });

// var numberStep = (now, tween) => {
//     var $target = $(tween.elem);

//     var rounded_now = Math.round(now);

//     $target.prop('number', rounded_now).text(rounded_now);
// };
// var parent = $('.js-parent');
// // var sum = 0;
// parent.on('change', function () {
//     var checkboxes = document.getElementsByClassName('js-checked');
//     var checkboxesChecked = [];
//     console.log(checkboxesChecked);

//     for (var index = 0; index < checkboxes.length; index++) {
//         if (checkboxes[index].checked) {
//             checkboxesChecked.push(10);
//         }
//     }
//     var sum = 0;

//     for (var i = 0; i < checkboxesChecked.length; i++) {
//         sum = sum + parseInt(checkboxesChecked[i]);

//     }
//     $('.js-counter').stop().animateNumber({
//         number: sum,
//         numberStep,
//     }, 1000);
//     var $arrow = $('.js-arrow');
//     rotate(sum);

//     function rotate(degree) {
//         $arrow.css({ 'transform': `rotate(${degree}deg)` });
//     }
//     console.log(sum);
//     return checkboxesChecked;
//     // return sum;

//     // counter();
// })

let numberStep = (now, tween) => {
    let $target = $(tween.elem);

    let rounded_now = Math.round(now);

    $target.prop('number', rounded_now).text(rounded_now);
};

let $parent = $('.js-parent');

$parent.on('change', function () {

    let $arrow = $('.js-arrow');
    let $checkboxes = $('.js-checked');
    let $counter = $('.js-counter');
    let checkboxesChecked = [];
    let sum = 0;

    for (let index = 0; index < $checkboxes.length; index++) {
        if ($checkboxes[index].checked) {
            checkboxesChecked.push(20);
        }
    }

    for (let i = 0; i < checkboxesChecked.length; i++) {
        sum = sum + parseInt(checkboxesChecked[i]);
    }

    $counter.stop().animateNumber({
        number: sum,
        numberStep,
    }, 1000);

    rotate(sum);
    
    function rotate(degree) {
        $arrow.css({ 'transform': `rotate(${degree}deg)` });
    }

    return checkboxesChecked;
})