$('.nav-toggler').on('click', expandMenu);

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
