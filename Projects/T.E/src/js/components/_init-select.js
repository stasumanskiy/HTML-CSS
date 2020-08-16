import $ from 'jquery';
import select2 from 'select2';

$(document).ready(function() {

  var selecInitMark = $('.js-selectConfig');

  if ($(selecInitMark).length) {
    selecInitMark.select2({
      placeholder: 'дате',
      minimumResultsForSearch: Infinity
    });
  };
});
