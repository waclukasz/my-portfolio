$(document).ready(function () {
    bgAnim();
    hello();
    borderDraw();
})

function bgAnim() {
    $('.bg-anim').delay(1500).animate({
        left: "25.5%"
    }, 350, 'swing');
    $('.bg-anim').animate({
        height: "51%"
    }, 150, 'swing');
    $('.bg-anim').animate({
        width: "175.73px"
    }, 300, 'swing', function () {
        setTimeout(function () {
            $('.bg-anim').remove();
        }, 00)

    });
}

function hello() {
    $('.about-header h1 > span:nth-child(1)').delay(500).animate({
        opacity: '1'
    });
    $('.about-header h1 > span:nth-child(1)').delay(550).animate({
        opacity: '1'
    }, 50, function () {
        $('.about-header h1 > span:nth-child(1)').text('front.');
        $('.about-header h1 > span:nth-child(2)').delay(1000).animate({
            opacity: '1'
        })
    });
}

function borderDraw() {
    $('.bl').delay(2400).animate({
        height: '100%',
    });
    $('.bb').delay(2400).animate({
        width: '100%',
    }, function () {
        $('.bt').animate({
            width: '100%',
        });
        $('.br').animate({
            height: '100%',
        })
    })
}
