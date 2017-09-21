window.onload = function() {

    		let ul = document.getElementsByClassName('aa')[0].getElementsByTagName('li');

    		for (let i = 0; i < ul.length; i++) {
    			ul[i].onmouseover = function(){
    				this.getElementsByClassName('box-a')[0].style.display = 'block';
    			}
    			ul[i].onmouseout = function(){
    				this.getElementsByClassName('box-a')[0].style.display = 'none';
    			}
    		}
    		let ul2 = document.getElementsByClassName('list');
    		let li2 = ul2[0].getElementsByTagName('li');
    		let item = document.getElementsByClassName('Box');
    		
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
    		
    		let imgbox = document.getElementsByClassName('bb');
    		let btn = document.getElementsByClassName('bd1');
    		let dian = btn[0].getElementsByTagName('li');
    		let img = imgbox[0].getElementsByTagName('li');
    		let back = document.getElementsByClassName('back');
    		let forward = document.getElementsByClassName('forward');
    		let num = 0;
    		let t;
    		 t = setInterval(fn, 5000)
    		imgbox[0].onmouseenter = function(){
    			clearInterval(t)
    		}
    		imgbox[0].onmouseleave = function(){
    			 t = setInterval(fn, 5000)
    		}
    		forward[0].onclick = fn
    		back[0].onclick = function(){
    				num--
    			if(num == -1){
    				num = img.length-1
    			}
    			for (let i = 0; i < img.length; i++) {
    				img[i].style.display = 'none';
    				dian[i].style.background = '#ddd'
    			}
    			img[num].style.display = 'block'
    			dian[num].style.background = '#ff6700'
    		}
    		function fn(){
    			num++
    			if(num ==img.length){
    				num = 0
    			}
    			for (let i = 0; i < img.length; i++) {
    				img[i].style.display = 'none';
    				dian[i].style.background = '#ddd'
    			}
    			img[num].style.display = 'block'
    			dian[num].style.background = '#ff6700'
    		}
    		for (let i = 0; i < dian.length; i++) {
    			dian[i].onclick = function(){
    			for (let j = 0; j < img.length; j++) {
    				img[j].style.display = 'none';
    				dian[j].style.background = '#ddd'
    				
    			}
    			num = i
    			img[num].style.display = 'block'
    			dian[i].style.background = '#ddd'
    			dian[num].style.background = '#ff6700'
    			
    		}
    	}
    
    	let search = document.getElementsByClassName('navi-right')
		let searchl = document.getElementsByClassName('nav1-left')
		let searchr = document.getElementsByClassName('navi-right2')
		let text = document.getElementsByClassName('text')
		let Lists = document.getElementsByClassName('List')
		searchl[0].onfocus = function(){
			searchl[0].style.borderColor = '#ff6700';
			searchr[0].style.borderColor = '#ff6700';
			text[0].style.display = 'none';
			Lists[0].style.display = 'block';
			Lists[0].style.borderColor = '#ff6700';

		}
		searchl[0].onblur = function(){
			searchl[0].style.borderColor = 'white';
			searchr[0].style.borderColor = '#e0e0e0';
			text[0].style.display = 'block';
			Lists[0].style.display = 'none';
			
		}

		let buycar = document.getElementsByClassName('buycar');
		let buy = document.getElementsByClassName('buy');
		buy[0].onmouseenter = function(){
			buycar[0].style.display = 'block';
		}
		buy[0].onmouseleave = function(){
			buycar[0].style.display = 'none';
		}
}
    		




