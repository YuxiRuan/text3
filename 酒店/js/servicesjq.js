$(function () {

        $('.CPimgbox2').mouseenter(function(){
            $('.box').eq($(this).index()).show();

        })
        $('.CPimgbox2').mouseleave(function(){
            $('.box').eq($(this).index()).hide();
        })

    $('.fangan').mouseenter(function () {
        $('.choose').slideDown()
    })
    $('.fangan').mouseleave(function () {
        $('.choose').slideUp()
    })
    let flag = true
    $(window).scroll(function(){
        let ST = document.body.scrollTop
        if(ST > 1500){
            if(flag){
                flag = false
                $('.back').animate({right:0})
            }
        }else{
            if(!flag){
                flag = true
                $('.back').animate({right:-50})
            }

        }

    })
    $('.back').click(function () {
        $(document.body).animate({scrollTop:0}, 1000)
    })
})


