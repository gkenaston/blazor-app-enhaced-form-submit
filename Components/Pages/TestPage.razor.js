

//$(document).on('submit', '#test-form', function (e) {
//    e.preventDefault();
//    return false;
//});

//$(document).ready(function () {
//    console.log('TestPage.ready');

//    $('#test-form').on('submit', function () {
//        console.log('test-form.submit');

//        var captchaKey = $('#test-form').find('input[name="Model.CaptchaKey"]').val();

//        grecaptcha.execute(captchaKey, { action: 'login' }).then(function (response) {
//            $('#test-form').find('input[name="Model.CaptchaToken"]').val(response);
//        });
//    });
//});

 good
(function ($) {
    $('#test-form').on('submit', function () {
        console.log('test-form.submit');

        var captchaKey = $('#test-form').find('input[name="Model.CaptchaKey"]').val();
        console.log('captchaKey: ' + captchaKey);
    });
})(jQuery);
