import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';


$(document).ready(function() {

  $(function() {
    var $sliderRangeVolume = $('#slider-range-volume');
    var $amountVolume = $('#amount-volume');
    var min = 'min';

    $sliderRangeVolume.slider({
      range: min,
      value: 2.0,
      min: 1.0,
      max: 2.41,
      step: 0.1,
      change: function(event, ui) {
        sumCalculate();
      },
      slide: function(event, ui) {
        $amountVolume.val(ui.value);
      }
    });
    $amountVolume.val($sliderRangeVolume.slider('value'));
  });

  $(function() {
    var $sliderRangeDay = $('#slider-range-day');
    var $amountDay = $('#amount-day');
    var min = 'min';

    $sliderRangeDay.slider({
      range: min,
      value: 24,
      min: 1,
      max: 31,
      step: 1,
      change: function(event, ui) {
        sumCalculate();
      },
      slide: function(event, ui) {
        $amountDay.val(ui.value);
      }
    });
    $amountDay.val($sliderRangeDay.slider('value'));
  });

  $(function() {
    var $sliderRangeTime = $('#slider-range-time');
    var $amountTime = $('#amount-time');
    var min = 'min';

    $sliderRangeTime.slider({
      range: min,
      value: 12,
      min: 1,
      max: 24,
      step: 1,
      change: function(event, ui) {
        sumCalculate();
      },
      slide: function(event, ui) {
        $amountTime.val(ui.value);
      }
    });

    $amountTime.val($sliderRangeTime.slider('value'));

  });




  //Calculator

  var formCalculate = $('#form-calculate');
  var textOutput = $('.js-amount-earnings');
  var radioGas = $('#radio-gas');
  var radioPetrol = $('#radio-petrol');
  var radioDiesel = $('#radio-diesel');

  formCalculate.on('change', function() {
    sumCalculate();
  });
  function sumCalculate() {
    var amountVolume = $('#amount-volume').val();
    var amountDay = $('#amount-day').val();
    var amountTime = $('#amount-time').val();
    var gas = 0.82;
    var petrol = 1.49;
    var diesel = 1.54;
    
    if (radioGas.is(':checked')) {
      var expensesGas = (16 / 9) * gas;
      console.log(expensesGas);
      var sumGas = amountDay * amountTime * (10 - expensesGas);
      console.log(sumGas);
      sumGas -= expensesGas;
      textOutput.text(parseInt(sumGas));
    };
    
    if (radioPetrol.is(':checked')) {
      var expensesPetrol = (16 / 9) * petrol;
      var sumPetrol = amountDay * amountTime * (10 - expensesPetrol);
      sumPetrol -= expensesPetrol;
      textOutput.text(parseInt(sumPetrol));
    };
    
    if (radioDiesel.is(':checked')) {
      var expensesoDiesel = (16 / 9) * diesel;
      var sumoDiesel = amountDay * amountTime * (10 - expensesoDiesel);
      sumoDiesel -= expensesoDiesel;
      textOutput.text(parseInt(sumoDiesel));
    };
        
  };
});
