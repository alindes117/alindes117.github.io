$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('active');
    }, 500);

    if($('body').hasClass('home')) {
        setTimeout(function() {
            $('.content .inner').attr('style', '');
        }, 2000);
    }


//     $.Finger.preventDefault = true;

//     $('.box1').on('drag', function(e) {
//         if(e.end) {
//             $('.box2').css({
//                 '-webkit-transition': 'transform 0.5s',
//                 '-webkit-transform': 'rotate(0deg)',
//                 'transform': 'rotate(0deg)'
//             },500);
//         } else {
//             $('.box2').css({
//                 '-webkit-transition': 'transform 0s',
//                 '-webkit-transform': 'rotate(' + (e.dy/2) + 'deg)',
//                 'transform': 'rotate(' + (e.dy/2) + 'deg)'
//             });
//         }
//     });
});