$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('active');
    }, 500);

    $(window).scroll(function() {
        changeNavLinks();

        scrollTop = $(window).scrollTop();
        var aboutPos = $('#about').offset().top;
        var diff = aboutPos - scrollTop;

        if(scrollTop > 100 && scrollTop < 150) {
            $('#navbar').addClass('active-oov');
        }

        if(scrollTop == 0) {
            $('#navbar').removeClass('active-oov active');
        }

        if(diff > 0 && diff <= 100) {
            $('#navbar').addClass('active').removeClass('active-oov');
        }

        if(diff >= 10) {
            $('#hero .bg').css({
                '-webkit-transform': 'translateY(' + (scrollTop/3).toFixed(2) + 'px)',
                '-moz-transform': 'translateY(' + (scrollTop/3).toFixed(2) + 'px)',
                'transform': 'translateY(' + (scrollTop/3).toFixed(2) + 'px)'
            });
        }
    });

    $('.form .form-control').on('change', function() {
        var id = $(this).attr('id');
        $('label[for="' + id + '"]').addClass('active');
    });

    $('.form .form-control').on('focusout', function() {
        var id = $(this).attr('id');
        var val = $(this).val();
        if(val.length == 0) {
            $('label[for="' + id + '"]').removeClass('active');
        }
    });

    $('.ocs').on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var pos = $(href).offset().top - 69;
        $('body, html').animate({
            scrollTop: pos
        }, 1000);
    });
});

function changeNavLinks() {
    var scrollTop = $(window).scrollTop();
    
    $('#navbar nav a:not(.btn)').each(function() {
        var currLink = $(this);
        var href = currLink.attr('href');
        var refElement = $(href);
        var posTop = refElement.position().top;
        if (posTop - 75 <= scrollTop && posTop + 175 + refElement.height() > scrollTop) {
            $('#navbar nav a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

function postForm() {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    if ((name !== "") && (email !== "") && (message !== "")) {
        $.ajax({
            url: "https://docs.google.com/forms/d/1Vl7YG8-gAYGAcrrwmLrg9DhlJVtNdcfXEh1TblF-Pdg/formResponse",
            data: {"entry.1927661432":name, "entry.1380666677":email, "entry.146993475":message},
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function (){
                    $('#name').val("");
                    $('#email').val("");
                    $('#message').val("");
                    //Success message
                    alert('Thanks for contacting us, we\'ll get back to you within 24 hours.');
                },
                200: function (){
                    $('#name').val("");
                    $('#email').val("");
                    $('#message').val("");
                    //Success Message
                    alert('Thanks for contacting us, we\'ll get back to you within 24 hours.');
                }
            }
        });
    }
    else {
        //Error message
        alert('Please fill in all fields.');
    }
}