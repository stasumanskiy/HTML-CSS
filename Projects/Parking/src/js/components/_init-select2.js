import select from 'select2';

$(document).ready(function() {
  const select = $('.js-select');
  if (select.length) {
    select.select2({
      // placeholder: 'USD',
      minimumResultsForSearch: Infinity
    });
  }
});
