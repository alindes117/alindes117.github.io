$(document).ready(function() {
    $('.box').on('click', function() {
        console.log('click');
    });

    $('.box').on('drag', function(e) {
        if(e.end) {
            $('.box').animate({
                'top': 0
            },500);
        } else {
            $('.box').css({
                'top': e.dy
            });
        }
    });
});