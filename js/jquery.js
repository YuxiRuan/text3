$(function() {
//轮播图
	let num= 0;
	let t
	t = setInterval(function(){move('forward')}, 5000)
	$('.bb').mouseenter(()=>{
		clearInterval(t)
	})
	$(window).blur(()=>{
		clearInterval(t)
	})
	$('.bb').mouseleave(()=>{
		t = setInterval(function(){move('forward')}, 5000)
	})
	$('.forward').click(()=>{move('forward')})
	$('.back').click(()=>{move('back')})
	function move1(){
		$('.bb>li').hide().eq(num).show()
		$('.bd1>li').css({background:'#fff'}).eq(num).css({background:'#ff6700'})
	}

	function move(dir){
		if(dir == 'forward'){
			num++
			if(num == $('.bb>li').length){
				num = 0
			}
		}else if (dir == 'back') {
			num--
		if(num < 0){
			num = $('.bb>li').length-1
		}
		}
		move1()
	}
	$('.bd1>li').click(function(){
		let i = $(this).index()
		$('.bb>li').hide().eq(i).show()
		$('.bd1>li').css({background:'#fff'}).eq(i).css({background:'#ff6700'}) 
		num = i
	})

	
//左边选项卡		
$('.a1:eq(0)').mouseover(()=>{
	$('.box-a:eq(0)').css({display:'block',width:530});   		
}).mouseout(()=>{
	$('.box-a:eq(0)').css({display:'none'});   		
}); 

$('.a1:eq(1)').mouseover(()=>{
	$('.box-a:eq(1)').css({display:'block',width:992});   		
}).mouseout(()=>{
	$('.box-a:eq(1)').css({display:'none'});
}); 
$('.a1:eq(2)').mouseover(()=>{
	$('.box-a:eq(2)').css({display:'block',width:992});   		
}).mouseout(()=>{
	$('.box-a:eq(2)').css({display:'none'});   		
}); 
$('.a1:eq(3)').mouseover(()=>{
	$('.box-a:eq(3)').css({display:'block',width:992});   		
}).mouseout(()=>{
	$('.box-a:eq(3)').css({display:'none'});   		
});
$('.a1:eq(4)').mouseover(()=>{
	$('.box-a:eq(4)').css({display:'block',width:530});   		
}).mouseout(()=>{
	$('.box-a:eq(4)').css({display:'none'});   		
});
$('.a1:eq(5)').mouseover(()=>{
	$('.box-a:eq(5)').css({display:'block',width:992});   		
}).mouseout(()=>{
	$('.box-a:eq(5)').css({display:'none'});   		
});
$('.a1:eq(6)').mouseover(()=>{
	$('.box-a:eq(6)').css({display:'block',width:265});   		
}).mouseout(()=>{
	$('.box-a:eq(6)').css({display:'none'});   		
});
$('.a1:eq(7)').mouseover(()=>{
	$('.box-a:eq(7)').css({display:'block',width:265});   		
}).mouseout(()=>{
	$('.box-a:eq(7)').css({display:'none'});   		
});
$('.a1:eq(8)').mouseover(()=>{
	$('.box-a:eq(8)').css({display:'block',width:265});   		
}).mouseout(()=>{
	$('.box-a:eq(8)').css({display:'none'});   		
});
$('.a1:eq(9)').mouseover(()=>{
	$('.box-a:eq(9)').css({display:'block',width:265});   		
}).mouseout(()=>{
	$('.box-a:eq(9)').css({display:'none'});   		
});



//搜索框
$('.nav1-left').focus(function(){
	$('.nav1-left').css({borderColor:'#ff6700'});
	$('.navi-right2').css({borderColor:'#ff6700'});
	$('.text').hide()
	$('.List').show().css({borderColor:'#ff6700'});

})
$('.nav1-left').blur(function(){
			$('.nav1-left').css({borderColor:'white'});
			$('.navi-right2').css({borderColor:'#e0e0e0'});
			$('.text').show();
			$('.List').hide();
			
	})

//购物车
$('.buy').mouseenter(()=>{
	$('.buycar').show()
})
$('.buy').mouseleave(()=>{
	$('.buycar').hide()
})
//顶部选项卡
for (var i = 0; i < 7; i++) {
 	$('.list>li').mouseover(function(){
 		$('.Box',this).css({height:'220px',borderTop:'1px solid black'})
 	})
 	$('.list>li').mouseout(function(){
 		$('.Box',this).css({height:'0',borderTop:'none'})
 	})
}
//小米明星单品
let a  = 0
let big = $('.big')
let width = $('.pict').width()
let pict = $('.pict')
let flags = true
let t2
 $('.littlebox').click(()=>{lunbo('you')})
 $('.littlebox1').click(()=>{lunbo('zuo')})
function lunbo(dir){
	if(dir=='you'){
		if(a==3){return}
		a++
	}else if (dir=='zuo'){
		if(a==0){return}
		a--
	}
	big.css({marginLeft:`${-width*a}px`})
}
pict.mouseenter(function(){
	clearInterval(t2)
});
pict.mouseleave(function(){
	t2 = setInterval(()=>{
		if(flags){
			if(a==3){
			flags = false
			return
			}
			a++
		}
		else{
			if(a ==0){
			flags = true
			return
			}
			a--
		}	
big.css({marginLeft:`${-width*a}px`})
},5000);
 
})
//搭配
let Dbox = $('.dwbox')
let select = $('.right-box1 a[class]:gt(0)')
for(let j = 0;j<13;j++){
	select.eq(j).mouseenter(function(){
		select.eq(j).parent().children('a').css({color:' #424242',borderBottom:'none'})
		$(this).css({color:' #ff6700',borderBottom:'2px solid #ff6700'})
		Dbox.eq(j).parent().children('.dwbox').hide()
		Dbox.eq(j).show()	
		
	}) 
}



//为你推荐
let num2 = 0
let width2 = $('.big-d').width()
$('.littlebox').eq(1).click(()=>{
	if(num2==3){return}
		num2++
		$('.bigb').css({marginLeft:`${-(width2+15)*num2}px`});
})
$('.littlebox1').eq(1).click(()=>{
	if(num2==0){return}
		num2--
		$('.bigb').css({marginLeft:`${-(width2+15)*num2}px`});
})

//内容
let Ul = $('.pain')[0]
 let blist = $('li',Ul)[0]
 let Bwidth = blist.offsetWidth  
 let Ljiantou = $('.jiantou1')[0]
 let Rjiantou = $('.jiantou2')[0]
let point = $('.yuan')[0]
let pointe = $('a',point)
 let nums = 0
 let nows = 0
 Rjiantou.onclick = function(){
		if(nums==2){return}
		nums++
		Ul.style.marginLeft = `${-Bwidth*nums}px`;
		for (let i = 0 ; i <2 ; i++) {
			pointe[i].style.background = '#b5b5b5'
		
		}
			pointe[nums].style.background = '#ff6700';

	}
Ljiantou.onclick = function(){
		if(nums==0){return}
		nums--
		Ul.style.marginLeft= `${-Bwidth*nums}px`;
		for (let i = 0 ; i <2 ; i++) {
			pointe[i].style.background = '#b5b5b5'

		}
			pointe[nums].style.background = '#ff6700';
			
	}
for (let i = 0; i < 3; i++){
	pointe[i].onclick = function(){
	Ul.style.marginLeft = `${-Bwidth*i}px`;
	pointe[i].style.background = '#ff6700';
	pointe[nows].style.background = '#b5b5b5'
	nows = i
}

}
let Ul1 = $('.pain')[1]
 let blist1 = $('li',Ul1)[1]
 let Bwidth1 = blist1.offsetWidth  
 let Ljiantou1 = $('.jiantou1')[1]
 let Rjiantou1 = $('.jiantou2')[1]
let point1 = $('.yuan')[1]
let pointe1 = $('a',point1)
 let nums1 = 0
 let nows1 = 0
 Rjiantou1.onclick = function(){
		if(nums1==2){return}
		nums1++
		Ul1.style.marginLeft = `${-Bwidth1*nums1}px`;
		for (let i = 0 ; i <3 ; i++) {
			pointe1[i].style.background = '#b5b5b5'
		
		}
			pointe1[nums1].style.background = '#ff6700';

	}
Ljiantou1.onclick = function(){
		if(nums1==0){return}
		nums1--
		Ul1.style.marginLeft= `${-Bwidth1*nums1}px`;
		for (let i = 0 ; i <3 ; i++) {
			pointe1[i].style.background = '#b5b5b5'

		}
			pointe1[nums1].style.background = '#ff6700';
			
	}
for (let i = 0; i < 3; i++){
	pointe1[i].onclick = function(){
	Ul1.style.marginLeft = `${-Bwidth1*i}px`;
	pointe1[i].style.background = '#ff6700';
	pointe1[nows].style.background = '#b5b5b5'
	nows = i
}

}


let Ul2 = $('.pain')[2]
 let blist2 = $('li',Ul2)[2]
 let Bwidth2 = blist2.offsetWidth 
 let Ljiantou2 = $('.jiantou1')[2]
 let Rjiantou2 = $('.jiantou2')[2]
let point2 = $('.yuan')[2]
let pointe2 = $('a',point2)
 let nums2 = 0
 let nows2 = 0
 Rjiantou2.onclick = function(){
		if(nums2==2){return}
		nums2++
		Ul2.style.marginLeft = `${-Bwidth2*nums2}px`;
		for (let i = 0 ; i <3 ; i++) {
			pointe2[i].style.background = '#b5b5b5'
		
		}
			pointe2[nums2].style.background = '#ff6700';

	}
Ljiantou2.onclick = function(){
		if(nums2==0){return}
		nums2--
		Ul2.style.marginLeft= `${-Bwidth2*nums2}px`;
		for (let i = 0 ; i <3 ; i++) {
			pointe2[i].style.background = '#b5b5b5'

		}
			pointe2[nums2].style.background = '#ff6700';
			
	}
for (let i = 0; i < 3; i++){
	pointe2[i].onclick = function(){
	Ul2.style.marginLeft = `${-Bwidth2*i}px`;
	pointe2[i].style.background = '#ff6700';
	pointe2[nows].style.background = '#b5b5b5'
	nows = i
}

}

let Ul3 = $('.pain')[3]
 let blist3 = $('li',Ul3)[1]
 let Bwidth3 = blist3.offsetWidth 
 let Ljiantou3 = $('.jiantou1')[3]
 let Rjiantou3 = $('.jiantou2')[3]
let point3 = $('.yuan')[3]
let pointe3 = $('a',point3)
 let nums3 = 0
 let nows3 = 0
 Rjiantou3.onclick = function(){
		if(nums3==2){return}
		nums3++
		Ul3.style.marginLeft = `${-Bwidth3*nums3}px`;
		for (let i = 0 ; i <3 ; i++) {
			pointe3[i].style.background = '#b5b5b5'
		
		}
			pointe3[nums3].style.background = '#ff6700';

	}
Ljiantou3.onclick = function(){
		if(nums3==0){return}
		nums3--
		Ul3.style.marginLeft= `${-Bwidth3*nums3}px`;
		for (let i = 0 ; i <3 ; i++) {
			pointe3[i].style.background = '#b5b5b5'

		}
			pointe3[nums3].style.background = '#ff6700';
			
	}
for (let i = 0; i < 3; i++){
	pointe3[i].onclick = function(){
	Ul3.style.marginLeft = `${-Bwidth3*i}px`;
	pointe3[i].style.background = '#ff6700';
	pointe3[nows].style.background = '#b5b5b5'
	nows = i
}

}






})

