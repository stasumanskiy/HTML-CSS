import datepicker from '@chenfengyuan/datepicker';

$(document).ready(function() {
  const datepicker = $('[data-toggle="datepicker"]');
  if (datepicker.length) {
    datepicker.datepicker();
  }
});
