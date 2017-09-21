/*
* @Author: 丑八怪
* @Date:   2017-08-15 13:39:15
* @Last Modified by:   丑八怪
* @Last Modified time: 2017-08-15 13:47:54
*/

'use strict';
$(function(){
	let ul = $('.aa')[0]
	let li = $('li',ul);
	let imgbox = $('.banner-pic')[0]
	let btn = $('.bd1')[0]
	let dian = $('li',btn)
	let img = $('li',imgbox)
	let widths = imgbox.offsetWidth
	let next = 0;
	let now = 0;
	let flag = true;
	let j = 0;
	let arr = []
	let Ih = innerHeight;
	let search = document.querySelector('.search-box')
	let list = document.querySelector('.List-L')
	let lis = document.querySelectorAll('.ListL3')
	let floor = document.querySelectorAll('.floor')
	let top = $('#L-last')
	let ii = 0;


	let tt = document.querySelectorAll('.dingwei>li[po]')
	let dec = document.querySelectorAll('div[poi]')
	tt.forEach((element, index)=>{
	element.onmouseenter = function(){
		dec[index].style.display = 'block'
		animate(dec[index],{right:35,opacity:1},300)
	 	
	}
	element.onmouseleave = function(){
		animate(dec[index],{right:70,opacity:0,display:'none'},300) 		
	}	
	});
	
	
	//选项卡
	for (let i = 0; i < li.length; i++) {
		li[i].onmouseover = function(){
			this.getElementsByClassName('boxa1')[0].style.display = 'block';
		}
		li[i].onmouseout = function(){
			this.getElementsByClassName('boxa1')[0].style.display = 'none';
		}
	}


	//轮播图
	let t 
	t = setInterval(display,5000)
	imgbox.onmouseenter = function(){
		clearInterval(t)
	}
	imgbox.onmouseleave = function(){
		t=setInterval(display,5000)
	}
	function display() {
		ii++
		if(ii == img.length){
			ii = 0
		}
			
			img[now].style.display = 'none' 
			dian[now].style.background = 'none'
			dian[ii].style.background = '#f9f9f9'
			img[ii].style.display = 'block'
			now = ii;
		
	}
		for (let i = 0; i < img.length; i++){
		dian[i].onmouseenter = function(){
			img[now].style.display = 'none' 
			dian[now].style.background = 'none'
			dian[i].style.background = '#f9f9f9'
			img[i].style.display = 'block'
			now = ii = i


		}
	}

	//侧导航滚轮

	floor.forEach(element=>{
		arr.push(element.offsetTop)
	})
	

	lis.forEach((element,index)=>{
		element.onclick = function(){
			let colors = ['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#ff0036'];
			lis[j].style.background = ''
			lis[index].style.background = `${colors[j]}`
			j = index
			animate(document.body,{scrollTop:arr[index]})
		}		
	})

	window.onscroll = function(){
		let ST = document.body.scrollTop
		arr.forEach((element,index)=>{
		let colors = ['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#ff0036'];	
			if(ST> element-50){
				lis[j].style.background = ''
				lis[index].style.background = `${colors[index]}`
				j = index

			}else{
				lis[index].style.background = ''
			}
		})
		if(ST > 900){
			if(flag){
				flag = false
				animate(search,{top:0})
				animate(list,{left:0})
			}
		}else{
			if(!flag){
				flag = true
				animate(search,{top:-50})
				animate(list,{left:-52})
			}

		}

	}
	top.onclick = function(){
		animate( document.body,{scrollTop :0}, 1000)
	}

	let num = $('.num1')[0]
	let tb 	= $('.wdtb')[0]

	num.onmouseenter = function(){
		tb.style.display = 'block'
	}
	num.onmouseleave = function(){
		tb.style.display = 'none'
	}
	let scj = $('.num2')[0]
	let sc = $('.scj')[0]
	scj.onmouseenter = function(){
		sc.style.display = 'block'
	}
	scj.onmouseleave = function(){
		sc.style.display = 'none'
	}

	let scjc = $('.num3')[0]
	let sj = $('.sjzc')[0]
	scjc.onmouseenter = function(){
		sj.style.display = 'block'
	}
	scjc.onmouseleave = function(){
		sj.style.display = 'none'
	}
	let wz = $('.num4')[0]
	let daohang = $('.daohang')[0]
	wz.onmouseenter = function(){
		daohang.style.display = 'block'
	}
	wz.onmouseleave = function(){
		daohang.style.display = 'none'
	}
})
