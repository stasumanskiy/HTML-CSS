//Validation contact form

$(document).ready(function() {

  $('input#name, input#email, input#password').unbind().blur( function() {   

    var that = $(this);
    var parentBox = that.parent('.js-parent');
    var id = that.attr('id');
    var val = that.val();
    var valid = 'valid';
    var error = 'error';

    switch(id) {
      // Проверка поля "Имя"
      case 'name':
        var rv_name = /^[a-zA-Zа-яА-Я]+$/;

        if (val === '') {
          // parentBox.addClass(valid);

          parentBox.removeClass(valid).addClass(error);
          that.removeClass(valid);
          that.next('.js-error').text('Введите свое имя');

        } else if (val.length < 2) {

          parentBox.removeClass(valid).addClass(error);
          that.removeClass(valid);
          that.next('.js-error').text('Имя должно содержать > 2 букв');

        } else if (!rv_name.test(val)) {

          parentBox.removeClass(valid).addClass(error);
          that.removeClass(valid);
          that.next('.js-error').text('Имя должно состоять из букв');

        } else {

          parentBox.addClass(valid);
          that.addClass(valid);

        }
        break;

        // Проверка email
      case 'email':

        var rv_email = /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/;

        if (val === '') {

          parentBox.removeClass(valid).addClass(error);
          that.removeClass(valid);
          that.next('.js-error').text('Введите свой Email ');

        } else if (!rv_email.test(val)) {

          parentBox.removeClass(valid).addClass(error);
          that.removeClass(valid);
          that.next('.js-error').text('Неверный формат email');
          
        } else {

          parentBox.addClass(valid);
          that.addClass(valid);

        }
        break;

      // Проверка поля "Пароля"
      case 'password':

        if (val === '') {

          parentBox.removeClass(valid).addClass(error);
          that.removeClass(valid);
          that.next('.js-error').text('Придумайте новый пароль');

        } else if (val.length < 5) {
          
          parentBox.removeClass(valid).addClass(error);
          that.removeClass(valid);
          that.next('.js-error').text('Пароль должно содержать > 5 символов');

        } else {

          parentBox.addClass(valid);
          that.addClass(valid);

        }
        break;
    };
    eachClass();
  });
});

function eachClass() {
  
  var pageParent = $('.js-page-parent');

  pageParent.each(function() {

    var that = $(this);
    var pageForm = that.find('.js-form');
    var pageParents = pageForm.find('.js-parent');
    var formSubmit = pageForm.find('.js-submit');
    var check = 'check';
    var validate = 'valid';

    pageForm.on('change', function() {

      var optionFirst = that.find('#optionFirst:radio:checked').val();
      var optionSecond = that.find('#optionSecond:radio:checked').val();
      
      if (optionFirst === 'on' || optionSecond === 'on') {
        pageForm.addClass(check);
      } else {
        pageForm.removeClass(check);
      }
    });
    pageForm.on('change', function() {

      var name = that.find('#name');
      var email = that.find('#email');
      var password = that.find('#password');
      var checkBox = that.find('#checkbox').prop('checked');

      if (name.hasClass(validate) && email.hasClass(validate) && password.hasClass(validate) && pageForm.hasClass(check) && checkBox === true) {
        formSubmit.attr('disabled', false);
      } else {
        formSubmit.attr('disabled', true);        
      }
    });
  });
};

