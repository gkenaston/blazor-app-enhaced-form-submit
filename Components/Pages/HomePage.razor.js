
//window.onSubmit = function (token) {
//    e.preventDefault();
//    console.log(token);
//    document.getElementById('Model.CaptchaToken').value = token;
//    //document.getElementById('test-form').submit();
//};

//export function onLoad() {
//    console.log("Home.onLoad");

//    var formButton = document.getElementById('form-button');
//    if (formButton) {
//        formButton.addEventListener('click', function (e) {
//            console.log('form-button.click');
//            e.preventDefault();
//            //grecaptcha.execute();
//            document.getElementById('test-form').submit();
//        });
//    }
//    else {
//        log.error('formButton is null.');
//    }
//}

export function onUpdate() {
    console.log('Home.onUpdate');
}


/*
(function ($) {
    $('#form-button').on('click', function (e) {
        e.preventDefault();
        var captchaKey = $('#test-form').find('input[name="Model.CaptchaKey"]').val();
        grecaptcha.execute(captchaKey, { action: 'login' }).then(function (response) {
            $('#test-form').find('input[name="Model.CaptchaToken"]').val(response);
            $('#test-form').submit();
        });
    });
})(jQuery);
*/
