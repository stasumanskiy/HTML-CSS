//show persent and button

$(document).ready(function() {

  var parentWrap = $('.js-parent-wrap');

  parentWrap.each(function() {
	
    var that = $(this);
    var percentText = that.find('.js-percent-text');
    var option = that.find('.js-option');
    var show = that.find('.js-show');
    var form = that.find('.js-form');

    form.on('change', function() {
  	var optionA = that.find('#optionA:radio:checked').val();
  	var optionB = that.find('#optionB:radio:checked').val();
  	var optionC = that.find('#optionC:radio:checked').val();
  	var addNumberA = '25%';
  	var addOptionA = 'A';
  	var addNumberB = '30%';
  	var addOptionB = 'Б';
  	var addNumberC = '40%';
  	var addOptionC = 'В';
  	var showBlock = parent.show;
  	var active = 'is-show';
  	if (optionA === 'on') {
  		show.addClass(active);
	    percentText.text(addNumberA);
	    option.text(addOptionA);
  	} else if(optionB === 'on') {
  		show.addClass(active);
	    percentText.text(addNumberB);
	    option.text(addOptionB);
  	} else if(optionC === 'on') {
  		show.addClass(active);
	    percentText.text(addNumberC);
	    option.text(addOptionC);
      }    
    });
  });
});
