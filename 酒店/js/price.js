$(function () {
    $('.imgbox li').sliphover();
    $('.fangan').mouseenter(function () {
        $('.choose').slideDown()
    })
    $('.fangan').mouseleave(function () {
        $('.choose').slideUp()
    })
})