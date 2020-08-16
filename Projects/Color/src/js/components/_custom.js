//Parlax

$(document).ready(function() {

  // Движение фона от мышки   

  $(document).on('mousemove', function(e) {
    var amountMovedX = 60 * ((e.pageX + 1) / $(document).width()) - 60;
    var amountMovedY = 60 * ((e.pageY + 1) / $(window).height()) - 100;
    var gradient = $('.js-gradient');
    
    gradient.css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });

  //Движени объектов

  $(document).on('mousemove', function(e) {
    var amountMovedX = 60 - 30 * ((e.pageX + 1) / $(document).width());
    var amountMovedY = 60 - 30 * ((e.pageY + 1) / $(window).height());
    var moveObject = $('.js-move-object');
  
    moveObject.css({ 'margin-right': '-' + amountMovedX + 'px', 'margin-bottom': '-' + amountMovedY + 'px' });
  });

});
