
window.verifyCallback = function (response) {
    console.log('verifyCallback');

    var form = document.querySelector('div.offcanvas.show form');
    form.querySelector('input[name="Model.CaptchaToken"]').value = response;
    //var submitter = form.querySelector('input[type="submit"]');
    //form.requestSubmit(submitter);
};

var registerCaptcha, loginCaptcha;

window.onloadCallback = function () {
    console.log('onloadCallback');

    registerCaptcha = grecaptcha.render('register-captcha', {
        'sitekey': '6LdbGRcaAAAAANiUivxhzoifj-wK83WnS7jJ-Xq9',
        'callback': 'verifyCallback'
    });

    loginCaptcha = grecaptcha.render('login-captcha', {
        'sitekey': '6LdbGRcaAAAAANiUivxhzoifj-wK83WnS7jJ-Xq9',
        'callback': 'verifyCallback'
    });
};

$(function () {
    var form = document.querySelector('div.offcanvas.show form');
    console.log(form);

    //form.querySelector('input[name="Model.CaptchaToken"]').value = 'response';
});
