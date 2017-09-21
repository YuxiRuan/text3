$(function () {
    $('.fangan').mouseenter(function () {
        $('.choose').slideDown()
    })
    $('.fangan').mouseleave(function () {
        $('.choose').slideUp()
    })
    $('.color').on('mouseenter',function () {
        $(this).animate({opacity:0},1000);
    })
    $('.color').on('mouseleave',function () {
        $(this).animate({opacity:1},1000);
    })
})