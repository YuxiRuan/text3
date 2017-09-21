/*
* @Author: ³ó°Ë¹Ö
* @Date:   2017-08-10 23:53:06
* @Last Modified by:   丑八怪
* @Last Modified time: 2017-08-13 17:19:00
*/

'use strict';
window.onload = function() {

    		let ul = document.getElementsByClassName('aa')[0].getElementsByTagName('li');

    		for (let i = 0; i < ul.length; i++) {
    			ul[i].onmouseover = function(){
    				this.getElementsByClassName('boxa1')[0].style.display = 'block';
    			}
    			ul[i].onmouseout = function(){
    				this.getElementsByClassName('boxa1')[0].style.display = 'none';
    			}
    		}

    		let li = document.getElementsByClassName('List')[0].getElementsByTagName('li')
            let lis = document.getElementsByClassName('lis')
            let lis1 = document.getElementsByClassName('lis1')
            let lis2 = document.getElementsByClassName('lis2')
            let lis3 = document.getElementsByClassName('lis3')

            li[0].onmouseenter = function(){
                lis[0].style.display = 'block';
            }
            li[0].onmouseleave = function(){
                lis[0].style.display = 'none';
            }
            li[3].onmouseenter = function(){
                lis1[0].style.display = 'block';
            }
            li[3].onmouseleave = function(){
                lis1[0].style.display = 'none';
            }
            li[7].onmouseenter = function(){
                lis2[0].style.display = 'block';
            }
            li[7].onmouseleave = function(){
                lis2[0].style.display = 'none';
            }
            li[8].onmouseenter = function(){
                lis3[0].style.display = 'block';
            }
            li[8].onmouseleave = function(){
                lis3[0].style.display = 'none';
            }

            let imgbox = document.getElementsByClassName('banner-pic');
            let btn = document.getElementsByClassName('bd1');
            let dian = btn[0].getElementsByClassName('bd');
            let img = imgbox[0].getElementsByTagName('li');
            let num = 0;
            let t;
             t = setInterval(fn, 5000)
            imgbox[0].onmouseenter = function(){
                clearInterval(t)
            }
            imgbox[0].onmouseleave = function(){
                 t = setInterval(fn, 5000)
            }
           
            function fn(){
                num++
                if(num ==img.length){
                    num = 0
                }
                for (let i = 0; i < img.length; i++) {
                    img[i].style.display = 'none';
                    dian[i].style.background = '#999'
                }
                img[num].style.display = 'block'
                dian[num].style.background = '#f3f3f3'
            }
            for (let i = 0; i < dian.length; i++) {
                dian[i].onmouseenter = function(){
                for (let j = 0; j < img.length; j++) {
                    img[j].style.display = 'none';
                    dian[j].style.background = '#999'
                    
                }
                num = i
                img[num].style.display = 'block'
                dian[i].style.background = '#999'
                dian[num].style.background = '#f3f3f3'
                
            }
        }

}