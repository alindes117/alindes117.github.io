$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('active');
    }, 500);

    if($('body').hasClass('home')) {
        setTimeout(function() {
            $('.content .inner').attr('style', '');
        }, 2000);
    } else if($('body').hasClass('lessons') || $('body').hasClass('intro')) {
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
    } else if($('body').attr('class') == "yaw try") {
        $('.touch-input').on('drag', function(e) {
            e.preventDefault();
            if(e.end) {
                $('.control img, #plane').css({
                    '-webkit-transition': 'transform 0.5s',
                    '-webkit-transform': 'rotate(0deg)',
                    'transform': 'rotate(0deg)'
                });
            } else {
                console.log(e.dy);
                if(e.dy > 0) {
                    var deg = e.dy/2;
                    
                    if(deg < 40) {

                        if($(this).hasClass('touch-left')) {
                            deg *= -1;
                            $('.control1 img, #plane').css({
                                '-webkit-transition': 'transform 0s',
                                '-webkit-transform': 'rotate(' + deg + 'deg)',
                                'transform': 'rotate(' + deg + 'deg)'
                            });   
                        }

                        if($(this).hasClass('touch-right')) {
                            $('#plane').css({
                                '-webkit-transition': 'transform 0s',
                                '-webkit-transform': 'rotate(' + deg + 'deg)',
                                'transform': 'rotate(' + deg + 'deg)'
                            });
                            deg *= -1;
                            $('.control2 img').css({
                                '-webkit-transition': 'transform 0s',
                                '-webkit-transform': 'rotate(' + deg + 'deg)',
                                'transform': 'rotate(' + deg + 'deg)'
                            });   
                        }
                    }
                }
            }
        });
    } else if($('body').attr('class') == "pitch try") {
        $('.touch-input').on('drag', function(e) {
            e.preventDefault();
            if(e.end) {
                $('.control1, #plane').css({
                    '-webkit-transition': 'transform 0.5s',
                    '-webkit-transform': 'rotate(0deg)',
                    'transform': 'rotate(0deg)'
                });
            } else {
                console.log(e.dx);
                var deg = e.dx/3;
                    
                if(Math.abs(deg) < 40) {
                    $('.control1, #plane').css({
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
    if($('body').hasClass('lessons') || $('body').hasClass('intro')) {
        changeHeight();
    }
});

function changeHeight() {
    var height = $('.content .container').height() + 250;
    $('.wrapper').css('min-height', height);
}