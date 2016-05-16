$(document).ready(function() {
    $.Finger.preventDefault = true;

    $('.box1').on('drag', function(e) {
        if(e.end) {
            $('.box2').css({
                '-webkit-transition': 'transform 0.5s',
                '-webkit-transform': 'rotate(0deg)',
                'transform': 'rotate(0deg)'
            },500);
        } else {
            $('.box2').css({
                '-webkit-transition': 'transform 0s',
                '-webkit-transform': 'rotate(' + (e.dy/2) + 'deg)',
                'transform': 'rotate(' + (e.dy/2) + 'deg)'
            });
        }
    });
});