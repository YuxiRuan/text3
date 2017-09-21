/*
* @Author: ³ó°Ë¹Ö
* @Date:   2017-08-14 18:33:14
* @Last Modified by:   丑八怪
* @Last Modified time: 2017-08-30 18:44:49
*/



$(function(){
	let imgbox = $('.bb')[0]
	let btn = $('.bd1')[0]
	let dian = $('li',btn)
	let img = $('li',imgbox)
	let widths = imgbox.offsetWidth
	let forward = $('.forward')[0]
	let back = $('.back')[0]
	let now = next = 0;
	let flag = true;
	let search = $('.navi-right')[0]
	let searchl =$('.nav1-left')[0]
	let searchr = $('.navi-right2')[0]
	let text = $('.text')[0]
	let Lists = $('.List')[0]
	let buycar = $('.buycar')[0];
	let buy = $('.buy')[0];
	let ul = $('.aa')[0]
	let li = $('.a1',ul);
	let ul2 = $('.list')[0];
    let li2 = $('li',ul2);
    let item =$('.Box');
	//轮播图
	t = setInterval(move, 5000)
	imgbox.onmouseenter = function(){
		clearInterval(t)
	}
	imgbox.onmouseleave = function(){
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
		dian[next].style.background = '#ff6700'
		img[next].style.left = `${-widths}px`
		animate(img[now],{left:widths})
		animate(img[next],{left:0},function(){flag = true})
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
		dian[next].style.background = '#ff6700'
		img[next].style.left = `${widths}px`
		animate(img[now],{left:-widths})
		animate(img[next],{left:0},function(){flag = true})
		now = next;
		
	}

	
	for (let i = 0; i < img.length; i++){
		dian[i].onclick = function(){
		if (now == i ){
			return;
		}
		dian[now].style.background = '#ddd'
		dian[i].style.background = '#ff6700'
		if (now < i){
		img[i].style.left = `${widths}px`
		animate(img[now],{left:-widths})
		animate(img[i],{left:0})
		
	 }else if(now > i){
	 	img[i].style.left = `${-widths}px`
		animate(img[now],{left:widths})
		animate(img[i],{left:0})
		
	 }
		
		now = next = i;
		}	
	}
	
	//搜索框
		searchl.onfocus = function(){
			searchl.style.borderColor = '#ff6700';
			searchr.style.borderColor = '#ff6700';
			text.style.display = 'none';
			Lists.style.display = 'block';
			Lists.style.borderColor = '#ff6700';

		}
		searchl.onblur = function(){
			searchl.style.borderColor = 'white';
			searchr.style.borderColor = '#e0e0e0';
			text.style.display = 'block';
			Lists.style.display = 'none';
			
		}

		//购物车
		buy.onmouseenter = function(){
			buycar.style.display = 'block';
		}
		buy.onmouseleave = function(){
			buycar.style.display = 'none';
		}

		//侧导航选项卡
    		for (let i = 0; i < li.length; i++) {
    			li[i].onmouseover = function(){
    				this.getElementsByClassName('box-a')[0].style.display = 'block';
    			}
    			li[i].onmouseout = function(){
    				this.getElementsByClassName('box-a')[0].style.display = 'none';
    			}
    		}
    	
    		let first1 = $('.box-a')[1]
    		first1.style.width = '530px'
    		let first2 = $('.box-a')[2]
    		first2.style.width = '992px'
    		let first3 = $('.box-a')[3]
    		first3.style.width = '992px'
    		let first4 = $('.box-a')[4]
    		first4.style.width = '992px'
    		let first5 = $('.box-a')[5]
    		first5.style.width = '530px'
    		let first6 = $('.box-a')[6]
    		first6.style.width = '992px'
    		let first7 = $('.box-a')[7]
    		first7.style.width = '265px'
    		let first8 = $('.box-a')[8]
    		first8.style.width = '265px'
    		let first9 = $('.box-a')[9]
    		first9.style.width = '265px'
    	
    	//顶部选项卡
			for (var i = 0; i < 7; i++) {
    		 	li2[i].index = i;
    		 	li2[i].onmouseover = function(){
    		 		item[this.index].style.height = '220px'
    		 		item[this.index].style.borderTop = '1px solid black';
    		 	}
    		 	li2[i].onmouseout = function(){
    		 		item[this.index].style.height = '0'
    		 		item[this.index].style.borderTop = 'none';
    		 	}
    		}
    //小米明星单品
    let big = $('.big')[0]
    let zuo = $('.littlebox1')[0]
    let you = $('.littlebox')[0]
    let pict = $('.pict')[0]
    let width = pict.offsetWidth
    let num = 0
    let flags = true;
	you.onclick = function(){
		if(num==3){return}
		num++
		big.style.marginLeft = `${-width*num}px`;
	}
	zuo.onclick = function(){
		if(num==0){return}
		num--
		big.style.marginLeft = `${-width*num}px`;
	}
	pict.onmouseenter = function(){
		clearInterval(t)
	}
	pict.onmouseleave = function(){
		t = setInterval(()=>{
			num++
		big.style.marginLeft = `${-width*num}px`;
		if(num==4){
			num--
			big.style.marginLeft = `${-width*num}px`;
			if(num==0){return}
		}	
}, 5000)
	}
	setInterval(()=>{

		if(flags){
			if(num==3){
			flags = false
			return
			}
			num++
		}
		else{
			if(num ==0){
			flags = true
			return
			}
			num--
		}
		
big.style.marginLeft = `${-width*num}px`;
},5000)

//搭配
let remen = $('.right-box1')[1]
let select = $('a',remen)
let Dbox = $('.dwbox')
let numb = 0
for (let i = 0; i < 4; i++) {
	select[i].onmouseenter =function() {

		select[numb].style.color = ' #424242' 
		select[numb].style.borderBottom = 'none' 
		Dbox[numb].style.display = 'none'
		Dbox[i].style.display = 'block'
		select[i].style.color = ' #ff6700' 
		select[i].style.borderBottom = '2px solid #ff6700' 
		
		numb = i
	} 
}


//配件
let remen1 = $('.right-box1')[2]
let select1 = $('a',remen1)
// console.dir(select)
let Dbox1 = $('.dwbox2')
// console.dir(Dbox)
let numb1 = 0
for (let i = 0; i < 4; i++) {
	select1[i].onmouseenter =function() {

		select1[numb].style.color = ' #424242' 
		select1[numb].style.borderBottom = 'none' 
		Dbox1[numb].style.display = 'none'
		Dbox1[i].style.display = 'block'
		select1[i].style.color = ' #ff6700' 
		select1[i].style.borderBottom = '2px solid #ff6700' 
		
		numb = i
	} 
}
//周边
let remen2 = $('.right-box1')[3]
let select2 = $('a',remen2)
// console.dir(select)
let Dbox2 = $('.dwbox3')
// console.dir(Dbox)
let numb2 = 0
for (let i = 0; i < 5; i++) {
	select2[i].onmouseenter =function() {

		select2[numb].style.color = ' #424242' 
		select2[numb].style.borderBottom = 'none' 
		Dbox2[numb].style.display = 'none'
		Dbox2[i].style.display = 'block'
		select2[i].style.color = ' #ff6700' 
		select2[i].style.borderBottom = '2px solid #ff6700' 
		
		numb = i
	} 
}


// 为你推荐
	let big2 = $('.bigb')[0]
    let zuo2 = $('.littlebox1')[1]
    let you2 = $('.littlebox')[1]
    let pict2 = $('.big-d')[0]
    let width2 = pict2.offsetWidth
 	let num2 = 0

	you2.onclick = function(){
		if(num2==3){return}
		num2++
		big2.style.marginLeft = `${-(width2+15)*num2}px`;

	}
	zuo2.onclick = function(){
		if(num2==0){return}
		num2--
		big2.style.marginLeft = `${-(width2+15)*num2}px`;
	}






// 内容
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


