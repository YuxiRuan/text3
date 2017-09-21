$(function(){
let imges = $('.imges')[0]
let img = $('li',imges)
let lunbo = $('.banner-lunbo')[0]
let dian = $('li',lunbo)
let now = 0;
let i = 0;
let j = 0;
let flag= true;
let t
let left = $('.left-bar')[0]
let right = $('.right-bar')[0]
//轮播图
t = setInterval(play,3000)
imges.onmouseenter = function(){
	clearInterval(t)
}
imges.onmouseleave = function(){
	t = setInterval(play,3000)
}
function play () {

	i++
	if(i == img.length){
		i = 0
	}
	animate(dian[i],{background:'#00A3D7'} ,500)
	animate(dian[now],{background:'#f5f5f5'} ,500)
	animate(img[i],{opacity:1})
	animate(img[now],{opacity:0})
	now=i
	}

  
for(let i = 0;i<img.length;i++){
	dian[i].onclick = function(){
		dian[i].style.background = '#00A3D7';
		img[i].style.opacity = 1;
		dian[j].style.background = '#f5f5f5';
		img[j].style.opacity = 0;
		j = i 
	}
}

right.onclick = function(){
	clearInterval(t)
	flag ?flag = false:play() 
}
left.onclick = function(){
	clearInterval(t)
	flag ?flag = false:play1()
}
function play1(){
	i--
	if(i <0 ){
		i = img.length-1
	}
	animate(dian[i],{background:'#00A3D7'} ,500)
	animate(dian[now],{background:'#f5f5f5'},500)
	animate(img[i],{opacity:1})
	animate(img[now],{opacity:0})
	now=i	
	}


//侧导航
let back = document.querySelector('.back')
window.onscroll = function(){
	let ST = document.body.scrollTop
	if(ST > 1500){
			if(flag){
				flag = false
				animate(back,{right:0})
			}
		}else{
			if(!flag){
				flag = true
				animate(back,{right:-50})
			}

		}

}
back.onclick = function () {
	animate(document.body,{scrollTop:0}, 1000) 
}

})