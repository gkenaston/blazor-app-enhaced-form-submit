
window.onCallback = function (response) {
    console.log('CaptchaInvisible.onCallback');
    var form = document.querySelector('form');
    form.querySelector('input[name="Model.CaptchaToken"]').value = response;
    var submitter = form.querySelector('input[type="submit"]');
    form.requestSubmit(submitter);
};

$(function () {
    console.log('CaptchaInvisible.ready');
    var form = document.querySelector('form');
    var button = form.querySelector('button[type="button"]');
    button.addEventListener('click', function (e) {
        console.log('button.click');
        e.preventDefault();
        grecaptcha.execute();
    });
});
