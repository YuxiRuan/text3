$(function() {

	//轮播图
let i = 0
let  t
let flag = true
t = setInterval(play,3000)
$('.imges').mouseenter(function(){
	clearInterval(t)
})
$('.imges').mouseleave(function(){
	t = setInterval(play,3000)
})
function play () {
	i++
	if(i == $('.imges li').length){
		i = 0
	}
	
	$('.imges li').animate({opacity:0},3000).eq(i).animate({opacity:1},1000);
	$('.banner-lunbo li').css({background:'#f5f5f5'})
	$('.banner-lunbo li').eq(i).css({background:'#00A3D7'})

	}
	for(let i = 0;i<$('.imges li').length;i++){
	$('.banner-lunbo li').eq(i).click(function(){
		$('.banner-lunbo li').css({background:'#f5f5f5'}).eq(i).css({background:'#00A3D7'})
		$('.imges li').hide().eq(i).show();
		
	})
}

 $('.right-bar').click(function(){
	clearInterval(t)
	flag ?flag = false:play() 
})
$('.left-bar').click(function(){
	clearInterval(t)
	flag ?flag = false:play1()
})
function play1(){
	i--
	if(i <0 ){
		i = $('.imges li').length-1
	}
	$('.imges li').hide().eq(i).show()
	$('.banner-lunbo li').css({background:'#f5f5f5'})
	$('.banner-lunbo li').eq(i).css({background:'#00A3D7'})
	}


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
$('.fangan').mouseenter(function () {
	$('.choose').slideDown()
})
    $('.fangan').mouseleave(function () {
        $('.choose').slideUp()
    })
 })


