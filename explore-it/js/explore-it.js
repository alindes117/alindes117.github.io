$(document).ready(function() {
    $('.box1').on('drag', function(e) {
        if(e.end) {
            $('.box2').animate({
                'top': 0
            },500);
        } else {
            $('.box2').css({
                'top': e.dy
            });
        }
    });
});