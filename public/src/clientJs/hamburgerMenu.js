jQuery.fn.rotate = function (degrees) {
    $(this).css({
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-ms-transform': 'rotate(' + degrees + 'deg)',
        'transform': 'rotate(' + degrees + 'deg)'
    });
    return $(this);
};


function toggleMenu() {
    var rot = 90;
    $(".hamburgerContainer").click(function showOnClick() {
        if (!$(".displayHook").is(":visible")) {
            $(".hamburgerContainer").rotate(rot);
            $(".displayHook").fadeIn();
            rot += 90;
        } else {
            $(".hamburgerContainer").rotate(rot);
            $(".displayHook").fadeOut();
            rot += 90
        }
    });
}



setTimeout(toggleMenu, 0);

$(window).resize(function(){
    if ($( document ).width() > 550){
        $(".displayHook").show();
    }

});

