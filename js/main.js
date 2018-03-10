$(document).ready(function () {
    $(this).scrollTop(0);
    
    //headerAnimation();
    loader();
});


// Expand the main navigation menu
$('.nav-toggler').on('click', expandMenu);

// Smooth scroll on menu elements
$('.nav-item > a').on('click', function (e) {
    e.preventDefault();

    let $target = $($(this).attr('href'));

    $('html, body').delay(300).animate({
        scrollTop: $target.offset().top
    }, 500);

    expandMenu();
});

// Animate main haeder on scroll event
$('body').on('scroll', headerAnimation);



function expandMenu() {
    let $menu = $('.menu-container');
    let $menuContent = $('.menu-container > *');
    let $toggler = $('.nav-toggler > div:last-of-type');

    if (!$menu.is(':animated')) {
        if (!$menu.hasClass('expand')) {
            $toggler.text('close');
            $('html, body').css({
                overflow: "hidden"
            });
            $menu.animate({
                height: "100vh"
            }, 250, "swing", function () {
                $menuContent.animate({
                    opacity: "1"
                }, function () {
                    $menu.addClass('expand');
                });
            });

        } else {
            $toggler.text('menu');
            $('html, body').css({
                overflow: "auto"
            });
            $menuContent.animate({
                opacity: "0"
            }, 100, "swing", function () {
                $menu.animate({
                    height: "0vh"
                }, 250, "swing", function () {
                    $menu.removeClass('expand')
                });
            });
        }
    }
};

function loader() {
    let $loaderBox = $('.loader');
    let $loaderStart = $('.loader-start');
    let $loaderCover = $('.loader-cover');

    $('html, body').css({
        overflow: "hidden"
    });

    $loaderStart.delay(600).animate({
        marginTop: "0",
        opacity: "1"
    }, 800, "swing", function () {
        $loaderCover.delay(400).animate({
            height: "0vh"
        }, 600, "swing");
        $loaderStart.delay(400).animate({
            marginTop: "10",
            opacity: "0"
        }, 400, "swing", function () {
            $loaderBox.delay(200).animate({
                height: "0vh"
            }, 300, function () {
                $loaderBox.css({
                    display: "none"
                });
            });
            headerLoader();
            smallHeaderLoader();
        });
    });
};

function headerLoader() {
    let $headerItems = $('.head > span');

    $headerItems.delay(200).animate({
        opacity: "1",
        margin: "0"
    }, 900, "swing", function () {
        $('html, body').css({
            overflow: "auto"
        });
    });
};

function smallHeaderLoader() {
    let $border = $('.border');
    let $smallHeader = $('.small-head > h2');

    $border.delay(400).animate({
        height: "25px",
        opacity: "1"
    }, 800, "swing");
    $smallHeader.delay(600).animate({
        opacity: "1"
    }, 800);
}

function headerAnimation() {
    console.log('dziala');
    let $headerItems = $('.head > span');
    let scrollTop = $('html, body').scrollTop();

    if (scrollTop < $('#main-header').height() * 0.8) {
        $headerItems.css({
            margin: Math.round(scrollTop / 15) // to make marginTop value smaller
        });
    };
}
