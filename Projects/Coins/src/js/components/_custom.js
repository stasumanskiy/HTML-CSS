//load Api

$(document).ready(function() {
  var select = $('.js-select');
  select.on('change', function() {
  	var option = $('.js-select option:selected').attr('value');
  	if (option === 'USD') {
	    showUsdConvertation();
  	} else if (option === 'EUR') {
	    showEurConvertation();
  	} else if (option === 'RUB') {
	    showRubConvertation();
  	} else if (option === 'GBR') {
	    showGbrConvertation();
  	}
  });
});

function showUsdConvertation() {
  $.getJSON('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD', {}, function(json) {
	  var valid = $('.js-valid');
	  valid.html('');
	  valid.append(json.open.hour);
  });
}
function showEurConvertation() {
  $.getJSON('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD', {}, function(json) {
	  var valid = $('.js-valid');
	  valid.html('');
	  valid.append(json.low);
  });
}
function showRubConvertation() {
  $.getJSON('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD', {}, function(json) {
	  var valid = $('.js-valid');
	  valid.html('');
	  valid.append(json.open.week);
  });
}
function showGbrConvertation() {
  $.getJSON('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD', {}, function(json) {
	  var valid = $('.js-valid');
	  valid.html('');
	  valid.append(json.open.month);
  });
}
