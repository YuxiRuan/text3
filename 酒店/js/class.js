/*
* @Author: ³ó°Ë¹Ö
* @Date:   2017-08-14 10:21:12
* @Last Modified by:   丑八怪
* @Last Modified time: 2017-08-14 22:12:51
*/


function $(select,range = document){
	if(typeof select == 'string'){
	let selector = select.trim();
	let firstchar = selector.charAt(0)
		if(firstchar == '#'){
			return range.getElementById(selector.substring(1))

		}
		else if(firstchar == '.'){
			return range.getElementsByClassName(selector.substring(1))
		}
		else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){
			return range.getElementsByTagName(selector)
		}
  }
  else if(typeof select == 'function'){
	  	window.onload = function(){
	  		select()
  	}
  }
}



function html(element,content){
	if(arguments.length ==2){
		element.innerHTML = content
	}else if(element.arguments.length ==1){
		return	element.innerHTML 
	}
}
function text(element,content){
	if(arguments.length ==2){
		element.innerText = content
	}else if(element.arguments.length ==1){
		return	element.innerText 
	}
}




function css(element,attrObj){
	for(let i in attrObj){
		element.style[i] = attrObj[i]
	}
}



//添加事件
function on(collection,type,fn){
	for (let i = 0; i < collection.length; i++) {
		collection[i][type] = fn;
	}
}
//删除事件
function off(collection,type){
	for (let i = 0; i < collection.length; i++) {
		collection[i][type] = null;
	}
}


function animate(element,attrObj,speed,fn){
	let t = setInterval(function(){
		for(let i in attrObj){
			let start = parseInt(getComputedStyle(element,null)[i])
			if(start >= attrObj[i]){
				clearInterval(t)
				if(fn){
					fn.call(element)
				}
			}
			element.style[i] = `${start+speed}px`
		}
	},60)
	
}