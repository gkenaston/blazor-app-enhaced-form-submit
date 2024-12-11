
(function ($) {
    $('#test-form').on('submit', function (e) {
        e.preventDefault();
        this.submit();
    });

    $('#page-button').on('click', function (e) {
        $('#form-button').click();
    });
})(jQuery);
