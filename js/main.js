$(document).ready(function() {
    resizeMain();
});

$(window).resize(function() {
    resizeMain();
});

function resizeMain() {
    var height = $(window).height();
    $('.wrapper').css('height', height);
}