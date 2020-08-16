import select from 'select2';

$(document).ready(function() {
  $('.js-select').select2({	
  	// placeholder: 'USD',
    minimumResultsForSearch: Infinity
  });
});
