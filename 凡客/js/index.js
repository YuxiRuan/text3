/*
* @Author: 丑八怪
* @Date:   2017-08-12 21:34:55
* @Last Modified by:   丑八怪
* @Last Modified time: 2017-09-19 11:21:09
*/

'use strict';
window.onload = function(){

	//下拉选项卡
	let box = document.getElementsByClassName('right-box')
	let li = box[0].getElementsByClassName('lis')
	let ol = document.getElementsByClassName('List')
	for (let i = 0; i < li.length; i++) {
		li[i].onmouseenter = function(){
		ol[i].style.height = '280px';
		ol[i].style.borderTop = '6px solid #b81822';

	}
	li[i].onmouseleave = function(){
		ol[i].style.height = '0px';
		ol[i].style.borderTop = 'none';
	}
}
	
	//购物车
	let buy = document.getElementsByClassName('buy')[0]
	let buylist = document.getElementsByClassName('js')
	buy.onmouseenter = function(){
		buylist[0].style.display = 'block';
	}
	buy.onmouseleave = function(){
		buylist[0].style.display = 'none';
	}

	//轮播图
	let banner = document.getElementsByClassName('banner');
	let img = banner[0].getElementsByTagName('img')
	let forward = banner[0].getElementsByClassName('banner-right')[0]
	let back = banner[0].getElementsByClassName('banner-left')[0]
	let btn = banner[0].getElementsByClassName('bd1')
	let dian = btn[0].getElementsByClassName('bd')
	let flag 
	let t
	let now =0, next = 0
	t = setInterval(move, 3000)
	banner[0].onmouseenter = function(){
		clearInterval(t)
	}
	banner[0].onmouseleave = function(){
		t = setInterval(move, 5000)
	}


	forward.onclick = function(){
		// clearInterval(t)
		if (flag){
			flag = false;
			move()
		}
	}
	back.onclick = function(){
		// clearInterval(t)
		if (flag){
			flag = false;
			move1()	
		}
	}


	function move1(){
		next--
		if(next < 0){
			next = img.length-1
		}
		for (let i =0 ; i <img.length ; i++){
			dian[i].style.background = '#ddd'
		}
		dian[next].style.background = '#a10000'
		animate(img[now],{display:'none'})
		animate(img[next],{display:'block'},function(){flag = true})
		now = next;
	}


	function move(){
		next++
		if(next == img.length){
			next = 0
		}
		for (let i = 0; i < img.length; i++){
			dian[i].style.background = '#ddd'
		}
		dian[next].style.background = '#a10000'
		animate(img[now],{display:'none'})
		animate(img[next],{display:'block'},function(){flag = true})
		now = next;
		
	}

	
	for (let i = 0; i < img.length; i++){
		dian[i].onclick = function(){
		if (i == next){
			return;
		}
		if (flag){
			flag = false;
			move()
		}
		if (now < i){
		animate(img[now],{display:'none'})
		animate(img[i],{display:'block'},function(){flag = true})
		dian[now].style.background = '#ddd'
		dian[i].style.background = '#a10000'
	 }else if(now > i){
	 	img[i].style.display = 'none'
		animate(img[now],{display:'block'})
		animate(img[i],{display:'none'},function(){flag = true})
		dian[now].style.background = '#ddd'
		dian[i].style.background = '#a10000'
	 }
		
		now = next = i;
		}	
	}
}