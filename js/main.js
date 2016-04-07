$(document).ready(function() {
    resizeMain();

    setTimeout(function() {
        $('body').addClass('active');
    }, 300);

    setTimeout(function() {
        $('.site-header').addClass('active');
    }, 1000);
});

$(window).resize(function() {
    resizeMain();
});

function resizeMain() {
    var height = $(window).height();
    $('.wrapper').css('height', height);
}