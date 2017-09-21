$(function () {
//右侧
	let  tt = $('.dingwei li[po]')
	
	tt.each(function(index,element){
	$(this).mouseenter(function(){
		$('div[poi]').eq(index).show().animate({right:35,opacity:1},300);

	 	
	})
	$(this).mouseleave(function(){
		$('div[poi]').eq(index).hide().animate({right:70,opacity:0},300)

	})	
	});
//选项卡
let li = $('.aa li')
	for (let i = 0; i < li.length; i++) {
		li.eq(i).mouseover(function(){
			$('.boxa1').show()
		})
		li.eq(i).mouseout(function(){
			$('.boxa1').hide()
		})
	}
//轮播图
	let t;
	let ii = 0;
	t = setInterval(display,5000)
	$('.banner-pic').mouseenter(function(){
		clearInterval(t)
	})
	$('.banner-pic').mouseleave(function(){
		t=setInterval(display,5000)
	})
	function display() {
		ii++
	if(ii == $('.banner-pic li').length){
			ii = 0
		}
			$('.banner-pic li').hide().eq(ii).show()
			$('.bd1 li').css({background:'none'}).eq(ii).css({background:'#f9f9f9'})
			
		
	}
	for (let i = 0; i < $('.banner-pic li').length; i++){
		$('.bd1 li').eq(i).mouseenter(function(){
			$('.banner-pic li').hide().eq(i).show()
			$('.bd1 li').css({background:'none'}).eq(i).css({background:'#f9f9f9'})
				ii=i
		})
	}

	//侧导航滚轮
	 let arr = []
	 let flag = true
	 let j = 0

	$('.floor').each((index,element)=>{
		arr.push(element.offsetTop)
	})

   for(i =0;i<$('.ListL3').length;i++){
       $('.ListL3').eq(i).click(function(){
		let colors = ['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#ff0036'];
		$('.ListL3').css({background:''})
		$(this).css(`${colors[i]}`)
           $(document.body).animate({scrollTop:arr[$(this).index()-1]-50},1000)
	})
}
	$(window).scroll(function(){
		let ST = document.body.scrollTop
		$.each(arr,function(index,element){
		let colors = ['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#ff0036'];	

			if(ST> element-100){
				$('.ListL3').eq(j).css({background:''})
				$('.ListL3').eq(index).css({background:`${colors[index]}`})
				j = index
			}else{
				$('.ListL3').eq(index).css({background:''})
			}
		})
		if(ST > 900){
			if(flag){
				flag = false
			$('.search-box').animate({top:0})
			$('.List-L').animate({left:0})
			}
		}else{
			if(!flag){
				flag = true
			$('.search-box').animate({top:-50})
			$('.List-L').animate({left:-52})
			}

		}

	})
	$('#L-last').click(function(){
		$(document.body).animate({scrollTop :0}, 1000)
	})

	let num = $('.num1')
	let tb 	= $('.wdtb')

	num.mouseenter(function(){
		tb.show()
	})
	num.mouseleave(function(){
		tb.hide()
	})
	let scj = $('.num2')
	let sc = $('.scj')
	scj.mouseenter(function(){
		sc.show()
	})
	scj.mouseleave(function(){
		sc.hide()
	})

	let scjc = $('.num3')
	let sj = $('.sjzc')
	scjc.mouseenter(function(){
		sj.show()
	})
	scjc.mouseleave(function(){
		sj.hide()
	})
	let wz = $('.num4')
	let daohang = $('.daohang')
	wz.mouseenter(function(){
		daohang.show()
	})
	wz.mouseleave(function(){
		daohang.hide()
	})



})