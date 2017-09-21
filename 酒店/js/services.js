window.onload = function(){
	let imgbox = document.querySelectorAll('.CPimgbox2')
	let box = document.querySelectorAll('.box')

for(let i = 0;i<3;i++){
	imgbox[i].onmouseenter = function(){
		box[i].style.opacity = 1
	}
	imgbox[i].onmouseleave = function(){
		box[i].style.opacity = 0
	}
  }
}