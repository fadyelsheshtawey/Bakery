let navScroll = $(".navbar").offset().top;
let arrowUp = $("h1").offset().top;

$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    let height = $(window).height()


    if (wScroll > 1) {
        $(".navbar").css("background-color", "white")
        $(".navbar-light .navbar-nav .nav-link").css("color", "black")
        $(".navbar-brand img").attr("src", "../images/asset 0.png")
        $(".navbar").addClass("shadow")

    }
    else {
        $(".navbar").css("background-color", "transparent")
        $(".navbar-light .navbar-nav .nav-link").css("color", "white")
        $(".navbar-brand img").attr("src", "../images/asset 1.png")
        $(".navbar").removeClass("shadow")
    }

    if (wScroll > (height / 2)) {
        $(".arrow-up").css("opacity", "1")
    }
    else {
        $(".arrow-up").css("opacity", "0")

    }
})

$(".nav-link").click(function(){

    let scrollTo = $(this).attr('href')
    $("body,html").animate({ scrollTop: $(scrollTo).offset().top }, 2000)})

$(".arrow-up").click(function () {
    $("body,html").animate({ scrollTop: '0' }, 3000)
})
$(".navbar-light .navbar-nav .blog").hover(function () {
    $(".blogItems").fadeIn()
})
$(".navbar-light .navbar-nav .blog").mouseleave(function () {
    $(".blogItems").fadeOut()
})