

//$(document).on('submit', '#test-form', function (e) {
//    e.preventDefault();
//    return false;
//});

$(function () {
    console.log('TestPage.ready');

    var form = document.querySelector('form');
    var submitter = form.querySelector('input[type="submit"]');
    var button = form.querySelector('button[type="button"]');

    button.addEventListener('click', function (e) {
        console.log('button.click');
        e.preventDefault();
        var captchaKey = form.querySelector('input[name="Model.CaptchaKey"]').value;
        grecaptcha.execute(captchaKey, { action: 'login' }).then(function (response) {
            form.querySelector('input[name="Model.CaptchaToken"]').value = response;
            form.requestSubmit(submitter);
        });
    });
});

// good
//(function ($) {
//    $('#test-form').on('submit', function () {
//        console.log('test-form.submit');

//        var captchaKey = $('#test-form').find('input[name="Model.CaptchaKey"]').val();
//        console.log('captchaKey: ' + captchaKey);
//    });
//})(jQuery);
/*
(function ($) {
    // get the form
    var form = $('form');
    // get the submit input in the form
    var submitter = form.find('input[type="submit"]');
    // get the button in the form
    var button = form.find('button[type="button"]');

    button.on('click', function (e) {
        console.log('button.click');
        e.preventDefault();

        var captchaKey = form.find('input[name="Model.CaptchaKey"]').val();

        grecaptcha.execute(captchaKey, { action: 'login' }).then(function (response) {
            form.find('input[name="Model.CaptchaToken"]').val(response);
            let myForm = document.querySelector('form');
            let submitButton = myForm.querySelector('input[type="submit"]');
            myForm.requestSubmit(submitButton);
        });
    });
})(jQuery);
*/
