$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('active');
    }, 500);

    if($('body').hasClass('home')) {
        setTimeout(function() {
            $('.content .inner').attr('style', '');
        }, 2000);
    } else if($('body').hasClass('lessons')) {
        changeHeight();
    } else if($('body').attr('class') == "roll try") {
        $('.touch-input').on('drag', function(e) {
            e.preventDefault();
            if(e.end) {
                $('.control2, #plane').css({
                    '-webkit-transition': 'transform 0.5s',
                    '-webkit-transform': 'rotate(0deg)',
                    'transform': 'rotate(0deg)'
                });
            } else {
                var deg = (e.dy/2);
                if($(this).hasClass('touch-left')) {
                    deg *= -1;
                }
                if(Math.abs(deg) <= 90) {
                    $('.control2, #plane').css({
                        '-webkit-transition': 'transform 0s',
                        '-webkit-transform': 'rotate(' + deg + 'deg)',
                        'transform': 'rotate(' + deg + 'deg)'
                    });
                }
            }
        });
    }
});

$(window).resize(function() {
    changeHeight();
});

function changeHeight() {
    var height = $('.content .container').height() + 250;
    $('.wrapper').css('min-height', height);
}