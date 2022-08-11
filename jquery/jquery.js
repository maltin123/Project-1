$(window).scroll(function () { 
    if($(window).scrollTop() > 500) {
        $("#top").fadeIn();
    } else {
        $("#top").fadeOut();
    };
});

$("#top").click(function () { 
    $("html").animate({scrollTop:0}, 500);
    
});